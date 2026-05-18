const sourcesData = [
  { source: "Referral",  count: 98, pct: 72, color: "#a78bfa" },
  { source: "Website",   count: 84, pct: 62, color: "#60a5fa" },
  { source: "Instagram", count: 66, pct: 49, color: "#f472b6" },
];

export default function Sources() {
  return (
    <section style={{ padding: "80px 40px", borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <p className="section-label">Lead sources</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 600, letterSpacing: "-0.025em", color: "var(--text-primary)", lineHeight: 1.2, marginBottom: 16 }}>
            Know exactly where your leads come from
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.75 }}>
            Every lead is tagged with its source — Website, Instagram, or Referral. Filter by source to see what's working and double down on your best channels.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {sourcesData.map((s) => (
            <div key={s.source} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 12,
              padding: "18px 20px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-body)" }}>{s.source}</span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 16, fontWeight: 500, color: s.color }}>{s.count} leads</span>
              </div>
              <div style={{ height: 4, background: "var(--border-subtle)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: s.pct + "%", background: s.color, borderRadius: 2, opacity: 0.7 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}