export default function CTA() {
  return (
    <section style={{ padding: "100px 40px", textAlign: "center" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 20, lineHeight: 1.1 }}>
          Ready to manage your pipeline?
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 36, lineHeight: 1.7 }}>
          Ask your admin to set up your account, then log in and start tracking leads from day one.
        </p>
        <a className="btn-primary" href="/login" style={{ padding: "14px 36px", fontSize: 15 }}>Go to dashboard</a>
      </div>
    </section>
  );
}