// NIR Leaderboard API — source of truth is the "NIR Leaderboard" Google Sheet.
// The sheet must be link-viewable ("Anyone with the link: Viewer") or Published to web
// for this server-side fetch to succeed. Falls back to {protocols: []} on any error,
// in which case the page keeps its hardcoded seed data.
//
// Sheet: https://docs.google.com/spreadsheets/d/13lB71oxVCyoeZtF0nNDBlHLxZBM5lIB1iS1ybyxzoXI

export const revalidate = 300; // re-pull the sheet at most every 5 minutes

const SHEET_ID = "13lB71oxVCyoeZtF0nNDBlHLxZBM5lIB1iS1ybyxzoXI";
const GID = "0";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${GID}`;

// Minimal RFC-4180 CSV parser (handles quoted fields, embedded commas/quotes/newlines).
function parseCSV(text) {
  const rows = [];
  let row = [], field = "", i = 0, inQuotes = false;
  while (i < text.length) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === ",") { row.push(field); field = ""; i++; continue; }
    if (c === "\r") { i++; continue; }
    if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; i++; continue; }
    field += c; i++;
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function tierFromScore(s) {
  return s >= 90 ? "A+" : s >= 85 ? "A" : s >= 80 ? "A−" : s >= 70 ? "B+"
    : s >= 65 ? "B" : s >= 60 ? "B−" : s >= 55 ? "C+" : s >= 45 ? "C"
    : s >= 40 ? "C−" : s >= 35 ? "D+" : s >= 30 ? "D" : s >= 25 ? "D−" : "F";
}

export async function GET() {
  try {
    const res = await fetch(CSV_URL, { next: { revalidate } });
    if (!res.ok) throw new Error(`sheet fetch ${res.status}`);
    const rows = parseCSV(await res.text());
    if (!rows.length) throw new Error("empty sheet");
    const header = rows[0].map((h) => h.trim());
    const col = (name) => header.indexOf(name);
    const num = (v) => {
      const n = parseFloat(String(v ?? "").replace(/[^0-9.\-]/g, ""));
      return Number.isFinite(n) ? n : null;
    };
    const pillarCols = ["Transparency", "Communication", "DataAccess", "Narrative", "ValueAccrual"];

    const protocols = rows.slice(1)
      .filter((r) => (r[col("Protocol")] || "").trim() && num(r[col("IR Score")]) != null)
      .map((r) => {
        const score = num(r[col("IR Score")]) || 0;
        return {
          name: r[col("Protocol")].trim(),
          ticker: (r[col("Ticker")] || "").trim(),
          sector: (r[col("Sector")] || "").trim(),
          score,
          // Prefer the sheet's curated Tier band; fall back to a computed tier if blank.
          tier: (col("Tier") >= 0 && (r[col("Tier")] || "").trim()) || tierFromScore(score),
          pillars: pillarCols.every((c) => col(c) >= 0 && r[col(c)] !== "")
            ? pillarCols.map((c) => num(r[col(c)]))
            : null,
          nir: col("NIR Ratio") >= 0 ? num(r[col("NIR Ratio")]) : null,
          irHub: col("IR Hub URL") >= 0 ? (r[col("IR Hub URL")] || "").trim() : "",
        };
      })
      .sort((a, b) => b.score - a.score)
      .map((p, i) => ({ ...p, rank: i + 1 }));

    return Response.json({ updatedAt: new Date().toISOString(), count: protocols.length, protocols });
  } catch (e) {
    return Response.json({ error: String(e), protocols: [] }, { status: 200 });
  }
}
