import { useTheme } from "../../../context/ThemeContext";

interface NavbarProps {
  scrollY: number;
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ scrollY }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrollY > 40 ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrollY > 40 ? "blur(12px)" : "none",
      borderBottom: scrollY > 40 ? "1px solid var(--border-strong)" : "1px solid transparent",
      transition: "all 0.3s",
      padding: "0 40px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "var(--logo-bg)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--logo-stroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em", color: "var(--text-body)" }}>LeadFlow</span>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#pipeline">Pipeline</a>
          <a className="nav-link" href="#about">About</a>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              border: "1px solid var(--border-medium)",
              background: "transparent",
              color: "var(--text-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, color 0.2s, border-color 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-hover)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-body)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a className="btn-ghost" href="/login">Sign in</a>
          <a className="btn-primary" href="/register">Get started</a>
        </div>
      </div>
    </nav>
  );
}