const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: "Smart search & filters",
    desc: "Find any lead instantly. Filter by status, source, date, or name with debounced real-time search across your entire pipeline.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Role-based access",
    desc: "Admins manage the org. Sales reps own their pipeline. Clear permissions, zero confusion — everyone sees exactly what they need.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Pipeline analytics",
    desc: "Track conversion rates from New to Qualified. See which sources — Website, Instagram, Referral — bring your best leads.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    title: "CSV export",
    desc: "Export your filtered leads to CSV in one click. Share reports with your team or import into any other tool you use.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: "Lead status tracking",
    desc: "Move leads through New → Contacted → Qualified → Lost with a single update. Always know where every deal stands.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "JWT authentication",
    desc: "Secure login with bcrypt-hashed passwords and JWT tokens. Protected routes ensure your data stays in the right hands.",
  },
];

export default function Features() {
  return (
    <section id="features" style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p className="section-label">Features</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, letterSpacing: "-0.025em", color: "var(--text-primary)", lineHeight: 1.15 }}>
            Everything your sales team needs
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: "var(--text-muted)", maxWidth: 460, margin: "14px auto 0", lineHeight: 1.7 }}>
            Built specifically for lead management — no bloat, no noise, just the tools that actually move deals forward.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div style={{
                width: 42, height: 42, borderRadius: 10,
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)",
                marginBottom: 18,
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: "var(--text-body)", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}