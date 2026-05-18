const stats = [
  { value: "10k+", label: "Leads tracked" },
  { value: "98%",  label: "Conversion visibility" },
  { value: "3x",   label: "Faster pipeline" },
  { value: "500+", label: "Sales teams" },
];

export default function Stats() {
  return (
    <section style={{ padding: "60px 40px", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-item" style={{ textAlign: "center", minWidth: 160 }}>
            <div style={{ fontFamily: "'Sora', sans-serif", fontSize: 36, fontWeight: 600, color: "var(--text-primary)", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}