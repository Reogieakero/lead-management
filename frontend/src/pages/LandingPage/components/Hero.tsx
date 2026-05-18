import DashboardPreview from "./DashboardPreview";
import { useTheme } from "../../../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="grid-bg" style={{ position: "relative", padding: "100px 40px 80px", overflow: "hidden" }}>
      <div className="animate-hero" style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600,
        background: isDark
          ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        animationDelay: "0.0s"
      }}/>
      
      <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center", position: "relative" }}>
        
        <div className="pill-badge animate-hero" style={{ animationDelay: "0.1s", display: "inline-flex" }}>
          <span className="dot-pulse"/>
          Smart lead management, built for sales teams
        </div>
        
        <h1 className="animate-hero" style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(38px, 6vw, 72px)",
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.03em",
          marginBottom: 24,
          animationDelay: "0.2s",
          color: "var(--text-primary)",
        }}>
          Every lead.<br />
          <span style={{ color: isDark ? "rgba(240,240,240,0.35)" : "rgba(0,0,0,0.25)" }}>Every stage. Every deal.</span>
        </h1>
        
        {/* Step 3: Subtitle Description */}
        <p className="animate-hero" style={{
          fontSize: 18,
          color: "var(--text-muted)",
          maxWidth: 520,
          margin: "0 auto 40px",
          lineHeight: 1.7,
          fontWeight: 300,
          animationDelay: "0.3s",
        }}>
          LeadFlow gives your sales team a single source of truth — track, filter, and close leads from every source, with full visibility for every role.
        </p>
        
        <div className="animate-hero" style={{ display: "flex", gap: 12, justifyContent: "center", animationDelay: "0.4s" }}>
          <a className="btn-primary" href="/register" style={{ padding: "12px 28px", fontSize: 15 }}>Start for free</a>
          <a className="btn-ghost" href="#features" style={{ padding: "12px 28px", fontSize: 15 }}>See how it works</a>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}