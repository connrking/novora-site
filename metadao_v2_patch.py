#!/usr/bin/env python3
"""
Restructures MetaDAO Q1 2026 report body content for visual density.
Replaces sections in-place; does NOT touch CSS, chart JSON, Recharts JS, or footer.

Run from ~/code/novora-site/:
    python3 metadao_v2_patch.py
"""
import re
import sys
from pathlib import Path

REPORT_PATH = Path("public/research/metadao-q1-2026.html")

# Additional CSS to inject for new visual elements (callouts, event tables, TL;DR cards)
EXTRA_CSS = """
/* === V2: Visual density additions === */
.tldr-card {
  background: var(--callout-bg);
  border-left: 2px solid var(--purple);
  padding: 14px 20px;
  margin: 0 0 32px 0;
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  color: var(--text-body);
  line-height: 1.55;
  max-width: 720px;
}
.tldr-card .tldr-label {
  font-style: normal;
  font-weight: 600;
  color: var(--purple-dark);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 11px;
  margin-right: 8px;
}

aside.callout {
  border-left: 2px solid var(--purple);
  background: var(--callout-bg);
  padding: 18px 24px;
  margin: 24px 0 32px 0;
  max-width: 720px;
}
aside.callout .callout-label {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--purple-dark);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
aside.callout .callout-text {
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.5;
  color: var(--text-primary);
}

table.events-summary, table.metrics-table, table.product-table, table.checklist-table, table.peer-table {
  width: 100%;
  max-width: 720px;
  border-collapse: collapse;
  margin: 24px 0 32px 0;
  font-family: var(--sans);
  font-size: 14px;
}
table.events-summary th, table.events-summary td,
table.metrics-table th, table.metrics-table td,
table.product-table th, table.product-table td,
table.checklist-table th, table.checklist-table td,
table.peer-table th, table.peer-table td {
  border-bottom: 0.5px solid var(--border);
  padding: 12px 14px;
  text-align: left;
  vertical-align: top;
}
table.events-summary th, table.metrics-table th, table.product-table th,
table.checklist-table th, table.peer-table th {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-faint);
  background: transparent;
  border-bottom: 0.5px solid var(--text-muted);
}
table.events-summary td.event-name, table.checklist-table td.task {
  font-weight: 500;
  color: var(--text-primary);
}
table.events-summary td.event-date {
  white-space: nowrap;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}
table.peer-table td.metric-val {
  font-variant-numeric: tabular-nums;
  font-weight: 400;
}
table.peer-table td.protocol-name {
  font-weight: 500;
}
table.peer-table tr.highlight td {
  background: var(--callout-bg);
  font-weight: 500;
}

ul.tight-list {
  margin: 8px 0 24px 24px;
  max-width: 700px;
}
ul.tight-list li {
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.65;
  margin-bottom: 6px;
  color: var(--text-body);
}

.event-detail {
  margin-bottom: 28px;
}
.event-detail h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 20px;
}
.event-detail p {
  margin-bottom: 10px;
  font-size: 14.5px;
}

.roadmap-bucket {
  margin-bottom: 36px;
}
.roadmap-bucket h3 {
  font-style: normal;
  font-size: 18px;
  font-family: var(--sans);
  font-weight: 600;
  color: var(--purple-dark);
  letter-spacing: 0.02em;
  margin-top: 0;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 0.5px solid var(--border);
}
.roadmap-item {
  margin-bottom: 16px;
  max-width: 720px;
}
.roadmap-item .item-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.roadmap-item .item-body {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 300;
  color: var(--text-body);
  line-height: 1.6;
}
"""

# ==========================================================================
# REPLACEMENT SECTIONS — restructured per visual density rules
# ==========================================================================

# Section 01 — Executive Summary (down from 1,127 words to ~450)
EXEC_NEW = '''<section id="exec">
  <div class="section-eyebrow">// 01 · Executive Summary</div>
  <h2>Building through the cycle</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Q1 fees declined sequentially as Solana ICO sentiment cooled, but the platform shipped its largest structural upgrade since launch — Futardio, the Omnibus liquidity migration, the Ranger liquidation, and Colosseum STAMP integration all closed during the quarter.
  </div>

  <p>Q1 2026 followed the strongest quarter in MetaDAO's history. Q4 2025 generated $2.52M in protocol revenue (per the team's published financial statements), launched 6 ICOs raising approximately $25.6M in subscription capital, and closed with a $10M META OTC raise via Proposal #34 that took the treasury from $1.96M to $12.24M USDC. Umbra's October ICO drew $154.9M in commitments against a $3M hard cap, and META reached an all-time high above $10.</p>

  <p>Q1 was the quarter the team used to build out the platform's next leg of growth: Futardio shipped as a permissionless complement to the curated launchpad, the Omnibus liquidity migration completed, and the Colosseum STAMP integration was finalized. Solana ecosystem sentiment cooled in parallel, which compressed token prices across the sector and slowed new-launch cadence. The platform itself ended Q1 structurally stronger than it began.</p>

  <aside class="callout">
    <div class="callout-label">// HEADLINE NUMBER</div>
    <div class="callout-text">$5.04M returned to RNGR holders via the first successful onchain liquidation in crypto governance history — a working proof of futarchy as a binding contract.</div>
  </aside>

  <h3 style="margin-top: 56px; margin-bottom: 8px; font-style: normal; font-size: 22px;">Key Metrics</h3>
  <div class="stats-grid">
    <div class="stat-cell">
      <div class="label">Q1 Revenue</div>
      <div class="value">$556K</div>
      <div class="delta neg">-78% vs Q4 2025</div>
    </div>
    <div class="stat-cell">
      <div class="label">Treasury (Q1-end)</div>
      <div class="value">$12.24M</div>
      <div class="delta pos">+524% vs Q4 open</div>
    </div>
    <div class="stat-cell">
      <div class="label">Token Price</div>
      <div class="value">$2.77</div>
      <div class="delta neg">-61% from ATH</div>
    </div>
    <div class="stat-cell">
      <div class="label">MCap / Annualized Rev</div>
      <div class="value">19–24x</div>
      <div class="delta">Mid-cluster vs peers</div>
    </div>
  </div>

  <div class="chart-wrap">
    <div class="chart-title">Q1 2026 META price with major catalysts</div>
    <div id="chart-timeline" style="height: 380px;"></div>
    <div class="chart-source">Source: Artemis. Annotations: Novora.</div>
  </div>
</section>'''


# Section 02 — Protocol & Network Context (down from 679 to ~430)
CONTEXT_NEW = '''<section id="context">
  <div class="section-eyebrow">// 02 · MetaDAO &amp; Network Context</div>
  <h2>Why this protocol exists</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>MetaDAO is the futarchy-based fundraising and governance platform on Solana. Three live products generate fees through ICO subscription and post-launch trading.
  </div>

  <p>MetaDAO is a futarchy-based fundraising and governance platform on Solana. The platform's core product set entered Q1 with three live components: the curated ICO launchpad that originated the platform's recent growth, the futarchy governance system that binds every launched protocol's treasury and major decisions to onchain decision markets, and a dual-venue secondary market structure that captures trading fees on META and ICO-issued ownership tokens via the protocol-owned Futarchy AMM and a Meteora LP position the protocol holds at 99.74%. During Q1 the platform shipped a fourth component, Futardio, a permissionless launchpad that opens issuance to teams without MetaDAO's curation gate.</p>

  <h3>Product lines</h3>

  <table class="product-table">
    <thead>
      <tr><th>Product</th><th>Status</th><th>Q1 Role</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class="event-name">Curated ICO Launchpad</td>
        <td>Live since Apr 2025</td>
        <td>Originated platform growth; one ICO per 2–3 weeks at curated quality bar.</td>
      </tr>
      <tr>
        <td class="event-name">Futarchy Governance</td>
        <td>Live since Nov 2023</td>
        <td>Binding decision markets for every launched protocol; settled the Ranger liquidation.</td>
      </tr>
      <tr>
        <td class="event-name">Futarchy AMM (Secondary)</td>
        <td>Live since Oct 10, 2025</td>
        <td>Primary fee venue Q1. ~60% of cumulative platform revenue since launch.</td>
      </tr>
      <tr>
        <td class="event-name">Meteora LP Position</td>
        <td>99.74% protocol-owned</td>
        <td>Captures ~40% of cumulative revenue. Migrated 90% of META liquidity in Q1.</td>
      </tr>
      <tr>
        <td class="event-name">Futardio (Permissionless)</td>
        <td>Launched Mar 4, 2026</td>
        <td>New growth lane. Opens issuance to teams without curation gate.</td>
      </tr>
    </tbody>
  </table>
</section>'''


# Section 03 — Quarter in Context (down from 442 to ~340)
QUARTER_CONTEXT_NEW = '''<section id="quarter-context">
  <div class="section-eyebrow">// 03 · Quarter in Context</div>
  <h2>How the quarter unfolded</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Three distinct phases: a strong January carry-over, a sharp February cooldown, and a March pivot to permissionless launches and the first liquidation precedent.
  </div>

  <p>Q1 2026 unfolded in three distinct phases. January carried Q4 2025's momentum forward, with daily fee generation peaking above $25K mid-month against the backdrop of Ranger Finance's ICO subscription period (Jan 6–10). The Ranger raise drew strong commitments and closed at a $3M hard cap, but the post-launch period set up the major dispute that would resolve in Q1's closing weeks. Daily fees averaged around $13K through January, the highest run-rate of the quarter.</p>

  <p>February brought a sharp cooldown across the Solana ecosystem. Daily Futarchy AMM fees fell from January's $13K average to roughly $4.3K, and META price compressed from above $7 at quarter-start to a $3.50–$4.00 range that held for most of the month. The Hurupay ICO (Feb 3) was the principal fundraising event but launched into weakening conditions; broader subscription appetite had cooled relative to October's Umbra and Ranger raises.</p>

  <p>March pivoted on three platform-defining events: Ranger Finance's tokenholder-initiated liquidation passed via decision market (Mar 12), Futardio launched as a permissionless complement to the curated launchpad (Mar 4), and the P2P.me ICO drew an insider-trading controversy on Polymarket (Mar 30). Daily Futarchy AMM fees compressed further to roughly $1.5–$2K, but the platform-level structural changes in March will define Q2's revenue setup more than Q1's reported figures will.</p>

  <aside class="callout">
    <div class="callout-label">// KEY TENSION</div>
    <div class="callout-text">The quarter's reported revenue weakened, but every structural change shipped during Q1 — Futardio, Omnibus migration, and the Ranger precedent — sets up Q2 to compound differently.</div>
  </aside>
</section>'''


# Section 04 — Q1 Detailed Metrics (preserved structure, light cleanup)
KEY_METRICS_NEW = '''<section id="key-metrics">
  <div class="section-eyebrow">// 04 · Q1 2026 Detailed Metrics</div>
  <h2>Full metrics breakdown</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Two figures define the quarter: $556K in protocol revenue (Artemis methodology) versus a $556–700K range when Meteora LP fees are included.
  </div>

  <table class="metrics-table">
    <thead>
      <tr><th>Metric</th><th>Q1 2026</th><th>vs Q4 2025</th></tr>
    </thead>
    <tbody>
      <tr><td>Total platform fees</td><td>$571K</td><td>−77%</td></tr>
      <tr><td>Protocol revenue (Artemis)</td><td>$556K</td><td>−78%</td></tr>
      <tr><td>Protocol revenue (Novora est., incl. Meteora LP)</td><td>$556–700K</td><td>−78% to −72%</td></tr>
      <tr><td>Daily fees (Q1 avg)</td><td>~$6.3K</td><td>−72%</td></tr>
      <tr><td>March exit-rate (daily, Futarchy AMM)</td><td>~$2.2K</td><td>—</td></tr>
      <tr><td>TVL (Q1-end)</td><td>$10.4M</td><td>−27%</td></tr>
      <tr><td>META price (Q1-end)</td><td>$2.77</td><td>−57%</td></tr>
      <tr><td>FDV (Q1-end)</td><td>$62.8M</td><td>−57%</td></tr>
      <tr><td>MCap / annualized revenue</td><td>19–24x</td><td>vs ~10–15x range Q4</td></tr>
    </tbody>
  </table>

  <p style="font-size: 13px; color: var(--text-muted);">MetaDAO's published Q4 2025 figure was $2.52M; Artemis recorded $1.82M for the same period. The variance reflects Meteora LP fees not captured in Artemis's MetaDAO revenue feed. The Q1 range here applies the same methodology.</p>
</section>'''


# Section 05 — Revenue & Fees (down from 1,046 to ~700)
REVENUE_NEW = '''<section id="revenue">
  <div class="section-eyebrow">// 05 · Revenue &amp; Fees</div>
  <h2>Total platform fees</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Monthly trajectory: $368K → $121K → $67K. The Q1 decline correlates with Solana ICO cadence cooling, not with platform-level take rate compression.
  </div>

  <div class="chart-wrap">
    <div class="chart-title">Daily platform fees (Futarchy AMM)</div>
    <div id="chart-fees" style="height: 280px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <p>Daily Futarchy AMM fees averaged $6,279 across Q1, ranging from a January high of $25,235 to multiple sub-$1,000 days in mid-February and late March. The monthly trajectory ($368K January → $121K February → $67K March) tracks tightly with Solana ecosystem sentiment and ICO cadence rather than any structural change in platform mechanics. The 0.5% take rate held throughout the quarter.</p>

  <h3>Protocol revenue and gross margin</h3>

  <div class="chart-wrap">
    <div class="chart-title">Cumulative platform fees, Q1 2026</div>
    <div id="chart-cumulative" style="height: 280px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <p>Cumulative Q1 fees on the Futarchy AMM venue reached $571K, of which approximately $556K accrues as protocol revenue under the Artemis methodology. Including the Meteora LP position (which captures secondary trading on META and certain post-launch ICO tokens), Novora estimates total Q1 protocol revenue at $556–700K. The team's published Q1 financial statements will be the canonical source for the actual venue split.</p>

  <h3>Monthly decomposition</h3>

  <div class="chart-wrap">
    <div class="chart-title">Monthly platform fees</div>
    <div id="chart-monthly" style="height: 240px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <h3>Take rate dynamics</h3>

  <div class="chart-wrap">
    <div class="chart-title">Weekly average fees (smoothed)</div>
    <div id="chart-weekly" style="height: 220px;"></div>
    <div class="chart-source">Source: Artemis. 7-day rolling average.</div>
  </div>

  <p>The 0.5% Futarchy AMM take rate is fixed by the platform's fee schedule (post the Q4 2025 retroactive adjustment that consolidated the previous 50/50 split between MetaDAO and the launching protocol). Take rate stability across the quarter means Q1's revenue decline is fully explained by volume compression, not by pricing pressure. Q2 fee acceleration therefore depends on launch cadence rather than monetization changes.</p>
</section>'''


# Section 06 — User Activity (down from 342 to ~280)
ACTIVITY_NEW = '''<section id="activity">
  <div class="section-eyebrow">// 06 · User Activity &amp; Engagement</div>
  <h2>TVL composition and movement</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>TVL is a noisy metric for MetaDAO — capital cycles through ICO escrow rather than parking. Q2 will introduce fee-velocity-per-dollar-of-TVL as the primary engagement metric.
  </div>

  <div class="chart-wrap">
    <div class="chart-title">Total value locked, Q1 2026</div>
    <div id="chart-tvl" style="height: 280px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <p>MetaDAO TVL closed Q1 at $10.4M, down from $14.8M at the January 31 reading. The intra-quarter decline reflects two factors: outflows from completed ICO escrow as projects deployed raised capital, and withdrawals from the META Meteora LP as investors trimmed positions during the broader Solana cooldown.</p>

  <p>TVL is procedurally noisy for MetaDAO because the platform's capital cycles through ICO escrow and conditional markets rather than parking indefinitely. Absolute TVL is therefore less informative for MetaDAO than a fee-velocity ratio (fees generated per dollar of TVL) would be. We will introduce that ratio as a tracked metric beginning with the Q2 2026 report.</p>
</section>'''


# Section 07 — Token Performance (down from 688 to ~520)
TOKEN_NEW = '''<section id="token">
  <div class="section-eyebrow">// 07 · Token Performance &amp; Tokenomics</div>
  <h2>Token price</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>META compressed −57% during Q1 versus a Solana sector decline of similar magnitude. The token tracks beta to Solana ICO sentiment more than to platform-level fundamentals.
  </div>

  <div class="chart-wrap">
    <div class="chart-title">META price, Q4 2025 → Q1 2026</div>
    <div id="chart-price" style="height: 280px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <p>META opened Q1 at approximately $7.20 and closed at $2.77, a 57% sequential decline. The peak above $10.50 occurred on January 4, on the back of strong Q4 2025 close and Ranger ICO subscription momentum. The trough at $2.77 on March 31 corresponded with weakest cycle conditions for Solana ICOs broadly.</p>

  <h3>FDV</h3>

  <div class="chart-wrap">
    <div class="chart-title">Fully diluted valuation, Q1 2026</div>
    <div id="chart-fdv" style="height: 280px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <h3>Supply mechanics</h3>

  <table class="product-table">
    <thead>
      <tr><th>Mechanism</th><th>Q1 Activity</th></tr>
    </thead>
    <tbody>
      <tr><td>Token burn (Omnibus migration)</td><td>~60,000 META burned (~0.27% of supply)</td></tr>
      <tr><td>Team performance package</td><td>2M META set for burn, contingent on Q2 roadmap execution</td></tr>
      <tr><td>OTC issuance</td><td>$10M META issued via Proposal #34 (Q4 close); no Q1 issuance</td></tr>
      <tr><td>Inflation rate</td><td>0% Q1 net (no new mints; small burn)</td></tr>
    </tbody>
  </table>

  <h3>Staking &amp; governance</h3>

  <p>META holders participate directly in futarchy proposal markets without a separate staking contract — proposal participation is the staking mechanism. Q1 saw 7 binding governance events execute successfully, including the Ranger liquidation and the SUPERCLAW Q2 roadmap proposal. Median proposal market liquidity remains the platform's primary engineering bottleneck per public team statements.</p>
</section>'''


# Section 08 — Peer Comp (down from 861 to ~620)
PEER_NEW = '''<section id="peer">
  <div class="section-eyebrow">// 08 · Peer Comparative Analysis</div>
  <h2>Where META sits in the peer set</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>MetaDAO trades at a 19–24x multiple — a premium to Jupiter (15.5x) and Raydium (12.4x). The premium has to be earned through Q2 launch cadence, not through multiple expansion.
  </div>

  <h3>Daily fees</h3>

  <div class="chart-wrap">
    <div class="chart-title">Daily fees vs peers (Q1 average, USD)</div>
    <div id="chart-peer-fees" style="height: 240px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <h3>Total value locked</h3>

  <div class="chart-wrap">
    <div class="chart-title">TVL vs peers (Q1-end)</div>
    <div id="chart-peer-tvl" style="height: 240px;"></div>
    <div class="chart-source">Source: Artemis.</div>
  </div>

  <p>MetaDAO sits at the smallest scale of its peer set across both fees and TVL, by design. The platform's fundraising-and-governance model is structurally lower-velocity than Jupiter's aggregator volume or Pump.fun's memecoin throughput. The relevant comparison is not absolute scale but valuation per dollar of revenue and trajectory — see below.</p>

  <h3>Valuation: market cap / annualized revenue</h3>

  <div class="chart-wrap">
    <div class="chart-title">MCap / Annualized Revenue (lower = cheaper)</div>
    <div id="chart-peer-mcap-rev" style="height: 260px;"></div>
    <div class="chart-source">Source: Artemis. MetaDAO range reflects Artemis vs Novora estimate methodology.</div>
  </div>

  <table class="peer-table">
    <thead>
      <tr><th>Protocol</th><th>MCap</th><th>Q1 Revenue</th><th>Annualized</th><th>MCap / Ann. Rev</th></tr>
    </thead>
    <tbody>
      <tr class="highlight">
        <td class="protocol-name">MetaDAO (Novora est.)</td>
        <td class="metric-val">$53M</td>
        <td class="metric-val">$700K</td>
        <td class="metric-val">$2.8M</td>
        <td class="metric-val">18.9x</td>
      </tr>
      <tr class="highlight">
        <td class="protocol-name">MetaDAO (Artemis)</td>
        <td class="metric-val">$53M</td>
        <td class="metric-val">$556K</td>
        <td class="metric-val">$2.2M</td>
        <td class="metric-val">23.8x</td>
      </tr>
      <tr>
        <td class="protocol-name">Jupiter</td>
        <td class="metric-val">$700M</td>
        <td class="metric-val">$11.3M</td>
        <td class="metric-val">$45.0M</td>
        <td class="metric-val">15.5x</td>
      </tr>
      <tr>
        <td class="protocol-name">Pump.fun</td>
        <td class="metric-val">$1.04B</td>
        <td class="metric-val">$118.5M</td>
        <td class="metric-val">$474.2M</td>
        <td class="metric-val">2.2x</td>
      </tr>
      <tr>
        <td class="protocol-name">Raydium</td>
        <td class="metric-val">$200M</td>
        <td class="metric-val">$4.0M</td>
        <td class="metric-val">$16.1M</td>
        <td class="metric-val">12.4x</td>
      </tr>
    </tbody>
  </table>

  <aside class="callout">
    <div class="callout-label">// NOVORA POV</div>
    <div class="callout-text">The premium versus Jupiter and Raydium has to be earned through demonstrated launch cadence and Futardio scale-up. The denominator is the lever, not the numerator.</div>
  </aside>
</section>'''


# Section 09 — Strategic Developments (down from 1,319 to ~850, restructured to event-card format)
STRATEGIC_NEW = '''<section id="strategic">
  <div class="section-eyebrow">// 09 · Strategic Developments &amp; Ecosystem</div>
  <h2>The events that defined the quarter</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Seven events shaped Q1: the Ranger liquidation precedent, Futardio's permissionless launch, the Omnibus migration, the Hurupay ICO, the P2P.me controversy, the $10M META OTC raise, and the Colosseum STAMP integration.
  </div>

  <table class="events-summary">
    <thead>
      <tr><th>Event</th><th>Date</th><th>Impact</th></tr>
    </thead>
    <tbody>
      <tr><td class="event-name">Ranger Finance liquidation</td><td class="event-date">Mar 12, 2026</td><td>$5.04M returned to RNGR holders. First successful onchain liquidation precedent.</td></tr>
      <tr><td class="event-name">Hurupay ICO</td><td class="event-date">Feb 3, 2026</td><td>Stablecoin payments raise into weakening sentiment. Strong post-launch product progress.</td></tr>
      <tr><td class="event-name">Futardio launch</td><td class="event-date">Mar 4, 2026</td><td>Permissionless launchpad opens issuance throughput. Q2 growth lever.</td></tr>
      <tr><td class="event-name">P2P.me Polymarket controversy</td><td class="event-date">Mar 30, 2026</td><td>Insider-trading episode forces conduct-policy review for Q2.</td></tr>
      <tr><td class="event-name">Omnibus liquidity migration</td><td class="event-date">Q1 (executed)</td><td>~90% of META liquidity moved to Futarchy AMM. ~60K META burned.</td></tr>
      <tr><td class="event-name">$10M META OTC raise (Proposal #34)</td><td class="event-date">Q4 close, executed Q1</td><td>Treasury from $1.96M → $12.24M USDC. Removes financing-pressure overhang.</td></tr>
      <tr><td class="event-name">Colosseum STAMP integration</td><td class="event-date">Finalized Q1</td><td>Solana hackathon pipeline routes through MetaDAO. Q2–Q3 cadence catalyst.</td></tr>
    </tbody>
  </table>

  <div class="event-detail">
    <h3>Ranger Finance ICO and liquidation</h3>
    <p>Ranger Finance raised against a $3M hard cap during the Jan 6–10 ICO, then was liquidated on March 12 via tokenholder-initiated decision market. The proposal returned $5.04M USDC to RNGR holders from the protocol treasury and LP position. This is the first successful onchain liquidation of a protocol by its tokenholders in crypto history.</p>
    <ul class="tight-list">
      <li>Trigger: alleged misrepresentation of 2025 revenue figures</li>
      <li>Mechanism: futarchy decision market voted PASS &gt; 3% time-weighted average</li>
      <li>Implication: establishes binding-contract precedent that institutional allocators have wanted</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>Hurupay ICO</h3>
    <p>Hurupay launched its ICO on February 3 into weakening Solana subscription appetite. The stablecoin payments protocol drew commitments below October-cycle peaks but post-launch product execution has been strong. Hurupay's progression toward graduation status is a Q2 monitoring item.</p>
    <ul class="tight-list">
      <li>Subscription period: Feb 3, 2026 (4-day standard window)</li>
      <li>Post-launch: continued product shipment despite weak market</li>
      <li>Q2 watch: graduation cadence and trading volume routing to Futarchy AMM</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>Futardio launch</h3>
    <p>Futardio launched March 4 as a permissionless complement to the curated launchpad. Teams can list directly without MetaDAO curation, with the same futarchy governance binding applied automatically. Trades curation-driven quality for permissionless throughput.</p>
    <ul class="tight-list">
      <li>Curation cap on parent launchpad: ~one launch every 2–3 weeks</li>
      <li>Early Futardio slate (late March): agri-DePIN, AI agents, prediction-market gaming, onchain music</li>
      <li>Q1 fee contribution: small (3 weeks of operating life). Q2 pivot lever.</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>P2P.me Polymarket incident</h3>
    <p>P2P.me's team wagered on its own ICO milestone via Polymarket without disclosure. The episode forced an ICO extension and refund window and raised platform-policy questions. MetaDAO has signaled additional team-conduct rules will be codified in Q2 in response.</p>
    <ul class="tight-list">
      <li>Profit on wagers: ~$15K (per team disclosure)</li>
      <li>Backer response: Multicoin Capital and Coinbase Ventures remained committed</li>
      <li>Platform response: Q2 conduct-rules codification (see Section 11)</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>Omnibus Proposal liquidity migration</h3>
    <p>Originated late Q4 2025, executed during Q1. Migrated approximately 90% of META liquidity from Meteora DAMM v1 to the Futarchy AMM and burned approximately 60,000 META in the process. This is the structural reason Q1 fee generation concentrates on the Futarchy AMM venue.</p>
    <ul class="tight-list">
      <li>Liquidity migrated: ~90% of META</li>
      <li>Tokens burned: ~60,000 META (~0.27% of supply)</li>
      <li>Implication: Q2 will be the first full quarter where Futarchy AMM dominates fee mix</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>$10M META OTC raise (Proposal #34)</h3>
    <p>The Q4-close OTC raise issued $10M of META at a market premium to fund treasury operations. Treasury moved from $1.96M to $12.24M USDC. The raise removes near-term financing pressure and gives the team room to invest in Q2 product cadence without runway tradeoffs.</p>
    <ul class="tight-list">
      <li>Treasury before: $1.96M USDC</li>
      <li>Treasury after: $12.24M USDC</li>
      <li>Q1 implication: no fundraising pressure during cycle weakness</li>
    </ul>
  </div>

  <div class="event-detail">
    <h3>Colosseum STAMP integration</h3>
    <p>Colosseum (Solana hackathon, accelerator, and venture fund whose alumni include Jito, Kamino, Drift, Exponent, and Hylo) introduced the STAMP investment contract in December 2025, finalized during Q1. STAMP positions Colosseum's deal flow as a structural pipeline of high-quality MetaDAO launch candidates.</p>
    <ul class="tight-list">
      <li>Pipeline: Colosseum hackathon &amp; accelerator alumni</li>
      <li>Mechanism: STAMP contract aligns with MetaDAO ICO model</li>
      <li>Q2–Q3 expected: first STAMP-routed launches enter the calendar</li>
    </ul>
  </div>
</section>'''


# Section 10 — Roadmap & Forward Guidance (preserved structure, tightened prose, converted to .roadmap-bucket format)
ROADMAP_NEW = '''<section id="roadmap">
  <div class="section-eyebrow">// 10 · Roadmap &amp; Forward Guidance</div>
  <h2>What MetaDAO has committed to in Q2 and beyond</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Forward guidance organized by commitment strength: governance-ratified, team-committed, directionally signaled, and explicit gaps where institutional disclosure is missing.
  </div>

  <div class="roadmap-bucket">
    <h3>Governance-ratified (passed proposals)</h3>

    <div class="roadmap-item">
      <div class="item-title">Q2 2026 Roadmap (SUPERCLAW proposal)</div>
      <div class="item-body">Bundled the burn of a 2M META team performance package with formal approval of the team's Q2 priorities. The futarchy mechanism approved both items together, meaning the burn is contingent on and aligned with execution against the roadmap. The closest equivalent in crypto to a board-approved corporate plan.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Omnibus Proposal liquidity migration</div>
      <div class="item-body">Approved late Q4 2025, executed Q1. Now the platform's structural fee architecture going forward — Q2 fee data will reflect a full quarter of this configuration.</div>
    </div>
  </div>

  <div class="roadmap-bucket">
    <h3>Team-committed (public statements with timeline)</h3>

    <div class="roadmap-item">
      <div class="item-title">Permissionless launches scaling (Futardio)</div>
      <div class="item-body">Team has publicly stated Futardio is the primary growth lane for Q2 launch cadence. Concrete commitment: maintain the curated launchpad in parallel and judge Futardio on its ability to add 2–3 additional launches per month at modest sizes during Q2.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Colosseum STAMP integration</div>
      <div class="item-body">First STAMP-routed launches are part of the Q2–Q3 cadence-acceleration plan. Pipeline conversion is named as a Q2 priority. Specific launches not yet scheduled.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Conduct rules in response to P2P.me</div>
      <div class="item-body">Platform will codify additional team-conduct rules into curation criteria during Q2. Exact rules not yet published. The commitment is that they will be — and that they will pass through the futarchy mechanism rather than be imposed administratively.</div>
    </div>
  </div>

  <div class="roadmap-bucket">
    <h3>Directionally signaled (no firm timeline)</h3>

    <div class="roadmap-item">
      <div class="item-title">Futarchy-as-a-Service expansion</div>
      <div class="item-body">Drift, Jito, and Sanctum have used the tooling. Team has stated this is a strategic priority but has not committed to specific new integrations or timelines for Q2.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">AMM liquidity improvements for proposal markets</div>
      <div class="item-body">Co-founder Proph3t has publicly identified proposal-market liquidity as the primary engineering bottleneck. Team is exploring AMM enhancements specifically for futarchy markets. No timeline or commitment to specific improvements published.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">CEX listings to broaden the holder base</div>
      <div class="item-body">Discussed as a path to broaden META distribution beyond Solana-native venues. No specific exchanges, timelines, or commitments named.</div>
    </div>
  </div>

  <div class="roadmap-bucket">
    <h3>Gaps in disclosure</h3>

    <div class="roadmap-item">
      <div class="item-title">Quarterly revenue or launch-volume targets</div>
      <div class="item-body">No quantitative Q2 targets for protocol fees, launch counts, or platform revenue. Recurring quantitative guidance is a standard ask from institutional capital. (Disclosure: Novora is engaged with MetaDAO to close gaps of this nature; introduction of forward guidance is part of our Q2 work plan with the team.)</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Treasury allocation policy</div>
      <div class="item-body">$12.24M Q4-end treasury removes near-term financing pressure, but no formal capital allocation policy published (operating spend vs. token buybacks vs. ecosystem investments vs. strategic reserves). A defined policy would tighten institutional valuation models.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Hiring and team scale plans</div>
      <div class="item-body">Platform operates with a small team relative to its revenue base. Whether the team intends to scale headcount during Q2–Q3 to support throughput acceleration has not been publicly addressed.</div>
    </div>

    <div class="roadmap-item">
      <div class="item-title">Multi-quarter strategic plan</div>
      <div class="item-body">Beyond the Q2 roadmap proposal, no explicit two-to-three quarter strategic horizon has been published. Investors evaluating the platform on a 12-month basis must construct this themselves from disparate team statements and proposal history.</div>
    </div>
  </div>
</section>'''


# Section 11 — Closing Summary & Q2 Outlook (down from 681 to ~450, with checklist table)
OUTLOOK_NEW = '''<section id="outlook">
  <div class="section-eyebrow">// 11 · Closing Summary &amp; Q2 2026 Outlook</div>
  <h2>Strong foundation, fee growth as the lever</h2>

  <div class="tldr-card">
    <span class="tldr-label">TL;DR</span>Structural thesis stronger than Q4 entry. Q1 P&amp;L weaker. Q2 will be defined by Futardio cadence and STAMP pipeline conversion.
  </div>

  <p>MetaDAO enters Q2 2026 with the platform's structural thesis materially stronger than it entered Q1, even with a softer financial run-rate during a sector-wide cooldown. The Ranger liquidation proved the futarchy mechanism's most ambitious claim. The Futardio launch opens a permissionless growth lane. The Omnibus migration captures a higher share of secondary trading economics. None of these are reflected in the Q1 P&amp;L, but all of them inform the Q2 outlook.</p>

  <h3>Q2 2026 catalysts to monitor</h3>

  <table class="checklist-table">
    <thead>
      <tr><th>Catalyst</th><th>Threshold</th><th>Direction</th></tr>
    </thead>
    <tbody>
      <tr><td class="task">Futardio launch cadence</td><td>2–3 launches/month at modest sizes</td><td>Bullish if achieved</td></tr>
      <tr><td class="task">Monthly aggregate fees</td><td>Return to $200K+ range</td><td>Bullish if achieved</td></tr>
      <tr><td class="task">Colosseum STAMP pipeline</td><td>1–2 STAMP-routed launches in Q2</td><td>Bullish if achieved</td></tr>
      <tr><td class="task">P2P.me conduct rules</td><td>Codified ICO conduct policy</td><td>Bullish on disclosure quality</td></tr>
      <tr><td class="task">Curated flagship launches</td><td>Hurupay graduation, new announcements</td><td>Bullish on quality bar</td></tr>
      <tr><td class="task">CEX listings</td><td>Tier-1 or Tier-2 exchange listing</td><td>Bullish on distribution</td></tr>
    </tbody>
  </table>

  <p>Three observations frame the Q2 revenue forecast. Q1's monthly trajectory implies a March exit-rate of approximately $2,200 per day or $800K annualized — a structurally low base on a single venue. Each curated ICO contributed approximately $100–200K in cumulative platform fees during Q4 2025–Q1 2026 cycles; three Q2 launches at this contribution rate produces $300–600K in launch-attributable fees. The MCap/revenue multiple at 19–24x compresses toward Jupiter's 15.5x as revenue grows, so the path to value is fee growth rather than multiple expansion.</p>

  <aside class="callout">
    <div class="callout-label">// WORTH WATCHING</div>
    <div class="callout-text">Any one of these catalysts could materially re-rate META. In combination, they would mark the platform's transition into its next growth phase. The conditions for that transition are forming.</div>
  </aside>
</section>'''


# ==========================================================================
# PATCH ENGINE
# ==========================================================================

def patch_section(html: str, section_id: str, new_content: str) -> tuple[str, bool]:
    """Replace a section by id with new content. Returns (new_html, success_bool)."""
    pattern = rf'<section id="{section_id}">.*?</section>'
    replacement = new_content
    new_html, count = re.subn(pattern, lambda m: replacement, html, count=1, flags=re.DOTALL)
    return new_html, count == 1


def main():
    if not REPORT_PATH.exists():
        print(f"✗ Report not found at {REPORT_PATH}")
        sys.exit(1)

    html = REPORT_PATH.read_text()
    backup = REPORT_PATH.with_suffix(".html.bak.v1")
    backup.write_text(html)
    print(f"✓ Backup saved to {backup}")

    sections = [
        ("exec", EXEC_NEW),
        ("context", CONTEXT_NEW),
        ("quarter-context", QUARTER_CONTEXT_NEW),
        ("key-metrics", KEY_METRICS_NEW),
        ("revenue", REVENUE_NEW),
        ("activity", ACTIVITY_NEW),
        ("token", TOKEN_NEW),
        ("peer", PEER_NEW),
        ("strategic", STRATEGIC_NEW),
        ("roadmap", ROADMAP_NEW),
        ("outlook", OUTLOOK_NEW),
    ]

    for sid, content in sections:
        html, ok = patch_section(html, sid, content)
        status = "✓" if ok else "✗"
        print(f"  {status} section #{sid}")
        if not ok:
            print(f"    WARNING: section #{sid} not found, skipped")

    # Inject extra CSS before </style>
    if EXTRA_CSS.strip() not in html:
        html = html.replace("</style>", EXTRA_CSS + "\n</style>", 1)
        print("✓ extra CSS injected")
    else:
        print("• extra CSS already present, skipping")

    REPORT_PATH.write_text(html)

    # Stats
    new_size = REPORT_PATH.stat().st_size
    text_only = re.sub(r'<[^>]+>', ' ', html)
    text_only = re.sub(r'\s+', ' ', text_only).strip()
    word_count = len(text_only.split())
    print(f"\n✓ v2 written: {new_size:,} bytes, ~{word_count:,} words (incl. nav/disclosures)")

    # Update TOC if needed (renumber sections — same numbering as before, no change required)


if __name__ == "__main__":
    main()
