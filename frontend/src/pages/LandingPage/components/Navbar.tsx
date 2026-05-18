import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

interface NavbarProps {
  scrollY: number;
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar({ scrollY }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrollY > 40 || isOpen ? "var(--nav-bg)" : "transparent",
      backdropFilter: scrollY > 40 || isOpen ? "blur(12px)" : "none",
      borderBottom: scrollY > 40 || isOpen ? "1px solid var(--border-strong)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <style>{`
        .nav-container {
          padding: 0 40px;
        }
        .desktop-menu {
          display: flex;
          gap: 32px;
          align-items: center;
        }
        .desktop-actions {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .icon-toggle-btn {
          background: transparent;
          border: none;
          padding: 4px;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        .icon-toggle-btn:hover {
          color: var(--text-body);
        }
        .mobile-hamburger-btn {
          display: none;
        }
        .mobile-menu-overlay {
          display: none;
        }

        /* Mobile Breakpoint */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
          }
          .desktop-menu, .desktop-actions {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 4px;
          }
          .mobile-hamburger-btn:hover {
            color: var(--text-body);
          }
          .mobile-menu-overlay {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 64px;
            left: 0;
            width: 100%;
            height: calc(100vh - 64px);
            background: var(--nav-bg);
            backdrop-filter: blur(12px);
            padding: 24px;
            box-sizing: border-box;
            gap: 24px;
            transform: ${isOpen ? "translateY(0)" : "translateY(-100%)"};
            opacity: ${isOpen ? "1" : "0"};
            pointer-events: ${isOpen ? "auto" : "none"};
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
            border-bottom: 1px solid var(--border-strong);
          }
          .mobile-links {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .mobile-links a {
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;
            color: var(--text-body);
          }
          .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: auto;
            padding-bottom: 40px;
          }
          .mobile-actions a {
            text-align: center;
            padding: 14px;
            font-size: 16px;
          }
        }
      `}</style>

      <div className="nav-container" style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, zIndex: 101 }}>
          <div style={{ width: 28, height: 28, background: "var(--logo-bg)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--logo-stroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em", color: "var(--text-body)" }}>LeadFlow</span>
        </div>

        <div className="desktop-menu">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#pipeline">Pipeline</a>
          <a className="nav-link" href="#about">About</a>
        </div>

        <div className="desktop-actions">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="icon-toggle-btn"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn-ghost" href="/login">Sign in</a>
          <a className="btn-primary" href="/register">Get started</a>
        </div>

        <div style={{ display: "none", alignItems: "center", gap: 16, zIndex: 101 }} className="mobile-controls-wrapper">
          <style>{`
            @media (max-width: 768px) {
              .mobile-controls-wrapper { display: flex !important; }
            }
          `}</style>
          
          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="icon-toggle-btn"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button 
            className="mobile-hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        <div className="mobile-menu-overlay">
          <div className="mobile-links">
            <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#pipeline" onClick={() => setIsOpen(false)}>Pipeline</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          </div>
          
          <div className="mobile-actions">
            <a className="btn-ghost" href="/login" onClick={() => setIsOpen(false)}>Sign in</a>
            <a className="btn-primary" href="/register" onClick={() => setIsOpen(false)}>Get started</a>
          </div>
        </div>

      </div>
    </nav>
  );
}