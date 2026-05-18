const pipelineStages = [
  { status: "New",       color: "#4ade80", count: 42, desc: "Fresh leads just entered into the system",        pct: 100 },
  { status: "Contacted", color: "#60a5fa", count: 28, desc: "Reached out — awaiting a response",               pct: 67 },
  { status: "Qualified", color: "#a78bfa", count: 18, desc: "Confirmed interest and fit for your offer",        pct: 43 },
  { status: "Lost",      color: "#f87171", count:  8, desc: "Didn't convert — logged for future analysis",      pct: 19 },
];

export default function Pipeline() {
  return (
    <section id="pipeline" style={{ padding: "80px 40px", borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <p className="section-label" style={{ textAlign: "center" }}>Lead pipeline</p>
        <h2 style={{ textAlign: "center", fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.025em", color: "var(--text-primary)", marginBottom: 48 }}>
          Track every stage of the journey
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {pipelineStages.map((stage) => (
            <div key={stage.status} style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 14,
              padding: "24px 20px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <span className="status-badge" style={{
                  background: stage.color + "18",
                  color: stage.color,
                  border: `1px solid ${stage.color}30`,
                  fontSize: 12,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: stage.color, display: "inline-block" }}/>
                  {stage.status}
                </span>
                <span style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>{stage.count}</span>
              </div>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 16 }}>{stage.desc}</p>
              <div style={{ height: 3, background: "var(--border-subtle)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: stage.pct + "%", background: stage.color, borderRadius: 2, opacity: 0.7 }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}