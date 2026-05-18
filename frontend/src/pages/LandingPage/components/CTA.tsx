import Button from "../../../components/ui/Button";

export default function CTA() {
  return (
    <section className="cta-section" style={{ textAlign: "center" }}>
      <style>{`
        .cta-section {
          padding: 100px 40px;
        }
        
        /* Mobile Breakpoint */
        @media (max-width: 600px) {
          .cta-section {
            padding: 64px 16px;
          }
          .cta-section p {
            margin-bottom: 28px !important;
            font-size: 15px !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 20, lineHeight: 1.1 }}>
          Ready to manage your pipeline?
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 36, lineHeight: 1.7 }}>
          Ask your admin to set up your account, then log in and start tracking leads from day one.
        </p>
        <Button href="/login" size="lg">Go to dashboard</Button>
      </div>
    </section>
  );
}