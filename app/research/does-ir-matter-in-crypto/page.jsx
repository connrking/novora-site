"use client";
import { useState, useMemo, useEffect } from "react";

const protocols = [
  { name:"Meteora", ir:95, mcapRev:0.8, rev:82, mcap:0.068, sector:"DEX", client:false },
  { name:"Aave", ir:80, mcapRev:20.1, rev:74.8, mcap:1.50, sector:"Lending", client:false },
  { name:"Maple", ir:78, mcapRev:30.5, rev:5.9, mcap:0.18, sector:"Lending", client:false },
  { name:"Lido", ir:76, mcapRev:3.2, rev:95, mcap:0.304, sector:"Staking", client:false },
  { name:"Raydium", ir:72, mcapRev:6.6, rev:320, mcap:2.10, sector:"DEX", client:false },
  { name:"Compound", ir:71, mcapRev:27.5, rev:5.1, mcap:0.14, sector:"Lending", client:false },
  { name:"Uniswap", ir:68, mcapRev:13.3, rev:240, mcap:3.19, sector:"DEX", client:false },
  { name:"Hyperliquid", ir:65, mcapRev:15.7, rev:548, mcap:8.60, sector:"Perps", client:false },
  { name:"Jito", ir:63, mcapRev:1.5, rev:210, mcap:0.311, sector:"Staking", client:false },
  { name:"Morpho", ir:62, mcapRev:13.3, rev:21, mcap:0.28, sector:"Lending", client:false },
  { name:"Jupiter", ir:60, mcapRev:3.6, rev:144, mcap:0.519, sector:"DEX", client:false },
  { name:"deBridge", ir:58, mcapRev:12.9, rev:5.5, mcap:0.071, sector:"Bridge", client:true },
  { name:"Sky", ir:57, mcapRev:18.5, rev:65, mcap:1.20, sector:"Lending", client:false },
  { name:"GMX", ir:55, mcapRev:1.6, rev:42, mcap:0.067, sector:"Perps", client:false },
  { name:"MetaDAO", ir:54, mcapRev:170.0, rev:0.4, mcap:0.068, sector:"Governance", client:true, outlier:true },
  { name:"Orca", ir:53, mcapRev:1.4, rev:18, mcap:0.025, sector:"DEX", client:false },
  { name:"Kamino", ir:52, mcapRev:9.7, rev:7.9, mcap:0.077, sector:"Lending", client:false },
  { name:"Marinade", ir:50, mcapRev:25.0, rev:8.4, mcap:0.21, sector:"Staking", client:false },
  { name:"Euler", ir:49, mcapRev:11.1, rev:1.9, mcap:0.021, sector:"Lending", client:false },
  { name:"Grass", ir:48, mcapRev:9.1, rev:33, mcap:0.30, sector:"DePIN", client:false },
  { name:"Drift", ir:47, mcapRev:1.1, rev:28, mcap:0.030, sector:"Perps", client:false },
  { name:"Lighter", ir:35, mcapRev:33.3, rev:30, mcap:1.0, sector:"Perps", client:false },
];

protocols.forEach(p => {
  p.efficiency = p.mcapRev && p.ir > 0 && !p.outlier ? (p.mcapRev / p.ir) * 10 : null;
});

const SC = { Lending:"#5B4DC7", DEX:"#0D8F6F", Perps:"#C84E1A", Staking:"#2563EB", Bridge:"#BE185D", Governance:"#B45309", DePIN:"#047857", AI:"#6B7280" };

function pearson(p){const n=p.length;if(n<3)return 0;const mx=p.reduce((s,v)=>s+v.ir,0)/n,my=p.reduce((s,v)=>s+v.mcapRev,0)/n;let a=0,b=0,c=0;p.forEach(v=>{const dx=v.ir-mx,dy=v.mcapRev-my;a+=dx*dy;b+=dx*dx;c+=dy*dy});return b&&c?a/Math.sqrt(b*c):0}
function linReg(p,key="mcapRev"){const n=p.length;if(n<2)return null;const mx=p.reduce((s,v)=>s+v.ir,0)/n,my=p.reduce((s,v)=>s+v[key],0)/n;let a=0,b=0;p.forEach(v=>{a+=(v.ir-mx)*(v[key]-my);b+=(v.ir-mx)**2});const m=b?a/b:0;return{m,b:my-m*mx}}

const FadeIn = ({children, delay=0, y=30}) => {
  const [v,setV]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setV(true),delay);return()=>clearTimeout(t)},[delay]);
  return <div style={{opacity:v?1:0,transform:v?"translateY(0)":`translateY(${y}px)`,transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`}}>{children}</div>
};

export default function Research() {
  const [filter,setFilter]=useState("all");
  const [minRev,setMinRev]=useState(0);
  const [hov,setHov]=useState(null);
  const [yMetric,setYMetric]=useState("mcapRev");

  const pts=useMemo(()=>protocols.filter(p=>p.mcapRev&&!p.outlier&&p.rev>=minRev&&(filter==="all"||p.sector===filter)),[filter,minRev]);
  const all=useMemo(()=>protocols.filter(p=>p.mcapRev&&p.rev>=minRev&&(filter==="all"||p.sector===filter)),[filter,minRev]);
  const r=useMemo(()=>pearson(pts),[pts]);
  const trend=useMemo(()=>linReg(pts,yMetric),[pts,yMetric]);
  const sectors=[...new Set(protocols.map(p=>p.sector))].sort();

  const yKey = yMetric;
  const yVals = pts.map(p => p[yKey]).filter(v => v != null && v > 0);
  const xMin=0,xMax=100,yMax=Math.ceil(Math.max(...yVals,10)*1.15);
  const W=740,H=460,P={t:24,r:28,b:52,l:58};
  const sx=v=>P.l+((v-xMin)/(xMax-xMin))*(W-P.l-P.r);
  const sy=v=>P.t+(1-v/yMax)*(H-P.t-P.b);

  const yLabel = yMetric === "mcapRev" ? "MCAP / REVENUE" : "NIR EFFICIENCY RATIO";

  return (
    <div style={{background:"#FAFAF8",color:"#1A1A2E",minHeight:"100vh",fontFamily:"'Helvetica Neue',Helvetica,Arial,sans-serif",overflow:"hidden"}}>

      <div className="rs-hero" style={{padding:"120px 48px 80px",maxWidth:900,position:"relative"}}>
        <FadeIn delay={100}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:4,color:"#7C6EF0",marginBottom:32,textTransform:"uppercase"}}>Novora Research · April 2026</div>
        </FadeIn>
        <FadeIn delay={250}>
          <h1 style={{fontSize:64,fontWeight:400,lineHeight:1.05,margin:"0 0 0 -4px",color:"#1A1A2E",letterSpacing:"-2px",maxWidth:700}}>
            Does IR<br/>Matter in<br/>Crypto<span style={{color:"#7C6EF0"}}>?</span>
          </h1>
        </FadeIn>
        <FadeIn delay={500}>
          <p style={{fontSize:18,lineHeight:1.9,color:"#333",margin:"40px 0 0",maxWidth:520,fontWeight:400}}>
            We scored {protocols.length} protocols on investor relations practices and measured the relationship to valuation multiples. The data tells a clear story.
          </p>
        </FadeIn>
        <div className="rs-accent-line" style={{position:"absolute",top:100,right:48,width:1,height:300,background:"linear-gradient(180deg,#7C6EF0 0%,transparent 100%)",opacity:0.12}} />
      </div>

      <FadeIn delay={700}>
        <div className="rs-stats-grid" style={{borderTop:"1px solid #E8E6E0",borderBottom:"1px solid #E8E6E0",display:"grid",gridTemplateColumns:"1fr 1px 1fr 1px 1fr 1px 1fr",alignItems:"center",background:"#fff"}}>
          {[
            ["n = "+pts.length,"Protocols Scored"],null,
            ["r = "+r.toFixed(2),"Pearson Correlation"],null,
            ["5","Pillar Framework"],null,
            ["100","Point Composite"],
          ].map((item,i)=>item===null?(
            <div key={i} style={{background:"#E8E6E0",alignSelf:"stretch"}} />
          ):(
            <div key={i} className="rs-stats-item" style={{padding:"36px 48px",textAlign:"center"}}>
              <div style={{fontSize:36,fontWeight:300,color:"#1A1A2E",letterSpacing:"-1px",fontVariantNumeric:"tabular-nums"}}>{item[0]}</div>
              <div style={{fontSize:10,letterSpacing:2,color:"#666",marginTop:8,textTransform:"uppercase"}}>{item[1]}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={900}>
        <div className="rs-thesis" style={{padding:"100px 48px",maxWidth:780}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#7C6EF0",marginBottom:24,textTransform:"uppercase"}}>The Thesis</div>
          <p style={{fontSize:24,lineHeight:1.8,color:"#444",margin:0,fontWeight:400}}>
            {`Protocols that invest in institutional-grade IR (consistent reporting, third-party data coverage, accessible communication) trade at multiples that reflect their fundamentals.`}
          </p>
          <p style={{fontSize:24,lineHeight:1.8,color:"#444",margin:"24px 0 0",fontWeight:400}}>
            {`Protocols that don\u2019t are subject to `}<span style={{color:"#1A1A2E",fontWeight:500}}>opacity discounts</span>{`: the market either overpays because it can\u2019t see the risks, or underpays because it can\u2019t see the value.`}
          </p>
        </div>
      </FadeIn>

      <div className="rs-chart-section" style={{padding:"40px 48px 80px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:24,flexWrap:"wrap",gap:12}}>
          <div>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#7C6EF0",textTransform:"uppercase"}}>IR Score vs. Valuation Multiple</div>
            <div style={{fontSize:12,color:"#777",marginTop:6}}>Bubble size = Market Cap · Color = sector</div>
          </div>
          <div className="rs-chart-controls" style={{display:"flex",gap:8}}>
            <select value={yMetric} onChange={e=>setYMetric(e.target.value)}
              style={{background:"#fff",border:"1px solid #E0DED8",color:"#555",padding:"7px 14px",borderRadius:4,fontSize:11,letterSpacing:0.5}}>
              <option value="mcapRev">MCap / Revenue</option>
              <option value="efficiency">NIR Efficiency Ratio</option>
            </select>
            <select value={filter} onChange={e=>setFilter(e.target.value)}
              style={{background:"#fff",border:"1px solid #E0DED8",color:"#555",padding:"7px 14px",borderRadius:4,fontSize:11,letterSpacing:0.5}}>
              <option value="all">All sectors</option>
              {sectors.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
            <select value={minRev} onChange={e=>setMinRev(Number(e.target.value))}
              style={{background:"#fff",border:"1px solid #E0DED8",color:"#555",padding:"7px 14px",borderRadius:4,fontSize:11}}>
              <option value={0}>All revenue</option>
              <option value={5}>Rev &gt; $5M</option>
              <option value={20}>Rev &gt; $20M</option>
              <option value={50}>Rev &gt; $50M</option>
            </select>
          </div>
        </div>

        <div style={{background:"#fff",borderRadius:8,border:"1px solid #E8E6E0",padding:"20px 20px 16px",overflowX:"auto"}}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",maxHeight:500,minWidth:400}}>
            {[...Array(7)].map((_,i)=>{const v=xMin+i*10;return v<=xMax&&(
              <g key={`x${v}`}><line x1={sx(v)} y1={P.t} x2={sx(v)} y2={H-P.b} stroke="#F0EEE8" strokeWidth="0.5"/>
              <text x={sx(v)} y={H-P.b+16} textAnchor="middle" fontSize="9" fill="#999" fontWeight="500">{v}</text></g>
            )})}
            {[...Array(6)].map((_,i)=>{const v=Math.round(yMax/5*i);return(
              <g key={`y${v}`}><line x1={P.l} y1={sy(v)} x2={W-P.r} y2={sy(v)} stroke="#F0EEE8" strokeWidth="0.5"/>
              <text x={P.l-8} y={sy(v)+3} textAnchor="end" fontSize="9" fill="#999" fontWeight="500">{yMetric==="mcapRev"?v+"x":v}</text></g>
            )})}

            <text x={W/2} y={H-8} textAnchor="middle" fontSize="10" fill="#777" fontWeight="600" letterSpacing="1">NOVORA IR SCORE™</text>
            <text x={12} y={H/2} textAnchor="middle" fontSize="10" fill="#777" fontWeight="600" letterSpacing="1" transform={`rotate(-90,12,${H/2})`}>{yLabel}</text>

            {trend&&<line x1={sx(xMin)} y1={sy(trend.m*xMin+trend.b)} x2={sx(xMax)} y2={sy(trend.m*xMax+trend.b)} stroke="#7C6EF0" strokeWidth="1.5" strokeDasharray="8,6" opacity="0.2"/>}

            {pts.map(p=>{
              const yVal = p[yKey];
              if(yVal == null) return null;
              const rad=Math.max(5,Math.min(22,Math.sqrt(p.mcap*1000)*1.1));
              const c=SC[p.sector]||"#999";
              const h=hov===p.name;
              return(
                <g key={p.name} onMouseEnter={()=>setHov(p.name)} onMouseLeave={()=>setHov(null)} style={{cursor:"crosshair"}}>
                  {h&&<circle cx={sx(p.ir)} cy={sy(yVal)} r={rad+8} fill={c} opacity={0.06}/>}
                  <circle cx={sx(p.ir)} cy={sy(yVal)} r={rad} fill={c} opacity={h?0.85:0.5}
                    stroke="#fff" strokeWidth={1}/>
                  <text x={sx(p.ir)} y={sy(yVal)-rad-5} textAnchor="middle"
                    fontSize={h?"11":"8.5"} fontWeight={h?"700":"500"} fill={h?"#1A1A2E":c}>{p.name}</text>
                  {h&&(
                    <g>
                      <rect x={Math.min(sx(p.ir)+rad+10,W-180)} y={sy(yVal)-50} width="172" height="88" rx="4" fill="#fff" stroke="#E0DED8" strokeWidth="1"/>
                      <text x={Math.min(sx(p.ir)+rad+18,W-172)} y={sy(yVal)-32} fontSize="12" fontWeight="700" fill="#1A1A2E">{p.name}</text>
                      <text x={Math.min(sx(p.ir)+rad+18,W-172)} y={sy(yVal)-15} fontSize="10" fill="#666">IR {p.ir} · {p.mcapRev.toFixed(1)}x MCap/Rev</text>
                      <text x={Math.min(sx(p.ir)+rad+18,W-172)} y={sy(yVal)+1} fontSize="10" fill="#666">${p.rev>=1e3?(p.rev/1e3).toFixed(1)+"B":p.rev+"M"} rev · ${p.mcap>=1?p.mcap.toFixed(2)+"B":(p.mcap*1e3).toFixed(0)+"M"} MCap</text>
                      <text x={Math.min(sx(p.ir)+rad+18,W-172)} y={sy(yVal)+17} fontSize="10" fontWeight="600" fill={c}>{p.sector}</text>
                      {p.efficiency!=null&&<text x={Math.min(sx(p.ir)+rad+18,W-172)} y={sy(yVal)+33} fontSize="10" fill={p.efficiency<1.5?"#0D8F6F":p.efficiency>5?"#C84E1A":"#666"}>NIR Efficiency: {p.efficiency.toFixed(1)}</text>}
                    </g>
                  )}
                </g>
              )
            })}
          </svg>

          <div style={{display:"flex",flexWrap:"wrap",gap:18,marginTop:16,paddingTop:16,borderTop:"1px solid #F0EEE8"}}>
            {Object.entries(SC).filter(([s])=>pts.some(p=>p.sector===s)).map(([s,c])=>(
              <span key={s} style={{display:"flex",alignItems:"center",gap:6,fontSize:10,color:"#555",letterSpacing:0.5}}>
                <span style={{width:8,height:8,borderRadius:1,background:c,display:"inline-block"}} />{s}
              </span>
            ))}
            <span style={{fontSize:10,color:"#555",marginLeft:"auto"}}>r = {r.toFixed(2)} · n = {pts.length}</span>
          </div>
        </div>
      </div>

      <div className="rs-insight-grid" style={{padding:"0 48px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:2}}>
        <div style={{background:"#fff",padding:"48px 40px",borderLeft:"3px solid #7C6EF0"}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#7C6EF0",marginBottom:20,textTransform:"uppercase"}}>What The Data Shows</div>
          <p style={{fontSize:15,lineHeight:1.9,color:"#333",margin:0,fontWeight:400}}>
            {`Higher IR scores correlate with `}<span style={{color:"#1A1A2E",fontWeight:500}}>tighter valuation multiples</span>.
            {` The market isn't overpaying for transparency. It's pricing well-covered protocols closer to fundamentals. Protocols with low IR and high multiples are trading on opacity. That\u2019s rerating risk.`}
          </p>
        </div>
        <div style={{background:"#fff",padding:"48px 40px",borderLeft:"3px solid #E0DED8"}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#555",marginBottom:20,textTransform:"uppercase"}}>Why This Matters</div>
          <p style={{fontSize:15,lineHeight:1.9,color:"#333",margin:0,fontWeight:400}}>
            {`For protocols: improving IR doesn't inflate your multiple. It `}<span style={{color:"#666"}}>removes the opacity discount</span>{` keeping your token mispriced. For investors: low IR + high multiple = highest correction risk when institutional scrutiny arrives.`}
          </p>
        </div>
      </div>

      <div className="rs-framework-section" style={{padding:"0 48px 80px"}}>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#7C6EF0",marginBottom:28,textTransform:"uppercase"}}>The Framework</div>
        <div className="rs-framework-grid" style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:2}}>
          {[
            {n:"Transparency",d:"Financial disclosure, reporting cadence, revenue segmentation"},
            {n:"Accessibility",d:"Investor channels, dedicated IR, gated comms"},
            {n:"Data Access",d:"Artemis, Token Terminal, Dune, DefiLlama, Blockworks Research"},
            {n:"Governance",d:"Proposal transparency, voting updates, DAO communications"},
            {n:"Positioning",d:"Narrative clarity, competitive context, valuation awareness"},
          ].map((p,i)=>(
            <div key={i} style={{background:"#fff",padding:"32px 20px",textAlign:"center",borderTop:`2px solid ${i===0?"#7C6EF0":"#E8E6E0"}`}}>
              <div style={{fontSize:42,fontWeight:200,color:"#7C6EF0",letterSpacing:"-1px"}}>{20}</div>
              <div style={{fontSize:9,color:"#555",letterSpacing:2,marginBottom:14,textTransform:"uppercase"}}>Points</div>
              <div style={{fontSize:13,fontWeight:600,color:"#1A1A2E",marginBottom:8}}>{p.n}</div>
              <div style={{fontSize:11,color:"#555",lineHeight:1.6}}>{p.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="rs-rankings-section" style={{padding:"0 48px 80px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#7C6EF0",textTransform:"uppercase"}}>Protocol Rankings</div>
          <a href="https://ir.novora.co" style={{fontSize:11,color:"#666",textDecoration:"none",letterSpacing:1}}>Full leaderboard →</a>
        </div>
        <div className="rs-table-wrap" style={{background:"#fff",border:"1px solid #E8E6E0",borderRadius:4,overflow:"hidden"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead>
              <tr>
                {["#","Protocol","Sector","IR Score","MCap/Rev","Revenue","Market Cap"].map(h=>(
                  <th key={h} style={{padding:"12px 16px",textAlign:h==="#"||h==="Protocol"||h==="Sector"?"left":"right",
                    fontSize:9,fontWeight:700,color:"#7C6EF0",letterSpacing:2,textTransform:"uppercase",borderBottom:"1px solid #E8E6E0"}}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...all].sort((a,b)=>b.ir-a.ir).map((p,i)=>(
                <tr key={p.name} style={{borderBottom:"1px solid #F5F4F0",transition:"background 0.1s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="#FAFAF8"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
                  <td style={{padding:"10px 16px",color:"#555",fontSize:10,fontWeight:700}}>{i+1}</td>
                  <td style={{padding:"10px 16px",fontWeight:400,color:"#1A1A2E"}}>
                    {p.name}{p.outlier&&<span style={{fontSize:8,color:"#555",marginLeft:4,verticalAlign:"super"}}>*</span>}
                  </td>
                  <td style={{padding:"10px 16px",color:SC[p.sector],fontSize:11,fontWeight:600}}>{p.sector}</td>
                  <td style={{padding:"10px 16px",textAlign:"right",fontWeight:700,fontVariantNumeric:"tabular-nums",
                    color:p.ir>=75?"#7C6EF0":p.ir>=60?"#1A1A2E":"#666"}}>{p.ir}</td>
                  <td style={{padding:"10px 16px",textAlign:"right",color:p.outlier?"#999":"#555",fontVariantNumeric:"tabular-nums"}}>
                    {p.mcapRev}x{p.outlier&&<span style={{fontSize:8,color:"#555"}}> *</span>}
                  </td>
                  <td style={{padding:"10px 16px",textAlign:"right",color:"#666",fontVariantNumeric:"tabular-nums"}}>
                    ${p.rev>=1e3?(p.rev/1e3).toFixed(1)+"B":p.rev+"M"}
                  </td>
                  <td style={{padding:"10px 16px",textAlign:"right",color:"#666",fontVariantNumeric:"tabular-nums"}}>
                    {p.mcap>=1?"$"+p.mcap.toFixed(2)+"B":"$"+(p.mcap*1e3).toFixed(0)+"M"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{padding:"12px 16px",fontSize:10,color:"#555",borderTop:"1px solid #F0EEE8"}}>
            {`* Excluded from scatter and correlation. MCap/Rev not meaningful for governance protocols with sub-$1M revenue`}
          </div>
        </div>
      </div>

      <div className="rs-methodology" style={{padding:"0 48px 100px",maxWidth:700}}>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:3,color:"#666",marginBottom:16,textTransform:"uppercase"}}>Methodology</div>
        <p style={{fontSize:13,lineHeight:2,color:"#444",margin:0,fontWeight:400}}>
          {`The Novora IR Score\u2122 evaluates protocols across 5 equally-weighted pillars (20 points each) for a 100-point composite. Each pillar contains 6 sub-criteria scored on a 0/5/10/15 scale, normalized to the pillar weight. Valuation data sourced from CoinGecko and Artemis. Revenue data sourced from Artemis and DefiLlama. Sample limited to protocols with verifiable on-chain revenue. Pearson\u2019s r used for correlation. This is observational. Correlation does not imply causation. Market data as of April 1, 2026.`}
        </p>
      </div>

      <div className="rs-cta-section" style={{borderTop:"1px solid #E8E6E0",padding:"80px 48px",textAlign:"center",background:"#fff"}}>
        <div style={{fontSize:10,fontWeight:700,letterSpacing:4,color:"#7C6EF0",marginBottom:20,textTransform:"uppercase"}}>Get Your Protocol Scored</div>
        <p style={{fontSize:16,color:"#444",maxWidth:460,margin:"0 auto 36px",fontWeight:400,lineHeight:1.8}}>
          The IR Score is the starting point. From there: Full IR Diagnostic, IR Monitor, or hands-on capital markets advisory.
        </p>
        <div className="rs-cta-links" style={{display:"flex",justifyContent:"center",gap:36,fontSize:13}}>
          {[["connor@novora.co","mailto:connor@novora.co"],["Book a call","https://calendly.com/connor_king"],["novora.co","https://novora.co"]].map(([l,h])=>(
            <a key={l} href={h} style={{color:"#7C6EF0",textDecoration:"none",borderBottom:"1px solid #7C6EF020",paddingBottom:4,transition:"border-color 0.2s"}}
              onMouseEnter={e=>e.currentTarget.style.borderColor="#7C6EF0"} onMouseLeave={e=>e.currentTarget.style.borderColor="#7C6EF020"}>{l}</a>
          ))}
        </div>
      </div>

      <div className="rs-footer" style={{borderTop:"1px solid #F0EEE8",padding:"20px 48px",display:"flex",justifyContent:"space-between",fontSize:10,color:"#555",letterSpacing:0.5}}>
        <span>Novora Holdings LLC</span>
        <span>{`Data: CoinGecko, Artemis, DefiLlama \u00b7 n=${protocols.length} \u00b7 April 2026`}</span>
      </div>
    </div>
  );
}
