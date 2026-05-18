import DashboardPreview from "./DashboardPreview";
import { useTheme } from "../../../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="grid-bg" style={{ 
      position: "relative", 
      padding: "60px 16px 60px", // Reduced padding to prevent content crowding on small devices
      overflow: "hidden" 
    }}>
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 600, height: 600,
        background: isDark
          ? "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>
      <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div className="pill-badge fade-in" style={{ 
          animationDelay: "0.0s", 
          display: "inline-flex",
          fontSize: "13px",
          padding: "6px 14px"
        }}>
          <span className="dot-pulse"/>
          Smart lead management, built for sales teams
        </div>
        <h1 className="fade-in" style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: "clamp(32px, 7vw, 64px)", // Smoother clamp values targeting optimal mobile presentation scales
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
          marginTop: 16,
          marginBottom: 16,
          animationDelay: "0.1s",
          color: "var(--text-primary)",
        }}>
          Every lead.<br />
          <span style={{ color: isDark ? "rgba(240,240,240,0.35)" : "rgba(0,0,0,0.25)" }}>Every stage. Every deal.</span>
        </h1>
        <p className="fade-in" style={{
          fontSize: "16px", // Reduced base size from 18px for structural readability on devices
          color: "var(--text-muted)",
          maxWidth: 520,
          margin: "0 auto 32px",
          lineHeight: 1.6,
          fontWeight: 300,
          animationDelay: "0.2s",
        }}>
          LeadFlow gives your sales team a single source of truth — track, filter, and close leads from every source, with full visibility for every role.
        </p>
        
        {/* Buttons now wrap cleanly if screen width forces it */}
        <div className="fade-in" style={{ 
          display: "flex", 
          gap: 12, 
          flexWrap: "wrap",
          justifyContent: "center", 
          animationDelay: "0.3s" 
        }}>
          <a className="btn-primary" href="/register" style={{ 
            padding: "12px 24px", 
            fontSize: 15,
            flex: "1 1 auto",
            maxWidth: "200px",
            minWidth: "140px"
          }}>Start for free</a>
          <a className="btn-ghost" href="#features" style={{ 
            padding: "12px 24px", 
            fontSize: 15,
            flex: "1 1 auto",
            maxWidth: "200px",
            minWidth: "140px"
          }}>See how it works</a>
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}