import { useTheme } from "../context/ThemeContext";

export function GlobalStyles() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Sora:wght@300;400;500;600&display=swap');

      :root {
        --bg-base:        ${isDark ? "#0a0a0a"                   : "#f5f5f3"};
        --bg-surface:     ${isDark ? "#121212"                   : "#ffffff"};
        --bg-elevated:    ${isDark ? "#161616"                   : "#f0efed"};
        --bg-card:        ${isDark ? "rgba(255,255,255,0.03)"    : "rgba(0,0,0,0.03)"};
        --bg-hover:       ${isDark ? "rgba(255,255,255,0.05)"    : "rgba(0,0,0,0.05)"};
        --bg-input:       ${isDark ? "#1a1a1a"                   : "#eaeae8"};

        --border-subtle:  ${isDark ? "rgba(255,255,255,0.07)"    : "rgba(0,0,0,0.08)"};
        --border-medium:  ${isDark ? "rgba(255,255,255,0.12)"    : "rgba(0,0,0,0.14)"};
        --border-strong:  ${isDark ? "rgba(255,255,255,0.06)"    : "rgba(0,0,0,0.07)"};

        --text-primary:   ${isDark ? "#f0f0f0"                   : "#111111"};
        --text-body:      ${isDark ? "#e8e8e8"                   : "#222222"};
        --text-muted:     ${isDark ? "rgba(232,232,232,0.5)"     : "rgba(0,0,0,0.45)"};
        --text-faint:     ${isDark ? "rgba(232,232,232,0.35)"    : "rgba(0,0,0,0.3)"};

        --nav-bg:         ${isDark ? "rgba(10,10,10,0.92)"       : "rgba(245,245,243,0.92)"};

        --grid-line:      ${isDark ? "rgba(255,255,255,0.03)"    : "rgba(0,0,0,0.045)"};

        --btn-primary-bg: ${isDark ? "#e8e8e8"                   : "#111111"};
        --btn-primary-fg: ${isDark ? "#0a0a0a"                   : "#f5f5f3"};
        --btn-primary-hover: ${isDark ? "#ffffff"                : "#333333"};

        --btn-ghost-fg:   ${isDark ? "rgba(232,232,232,0.7)"     : "rgba(0,0,0,0.6)"};
        --btn-ghost-border: ${isDark ? "rgba(255,255,255,0.12)"  : "rgba(0,0,0,0.15)"};
        --btn-ghost-hover-border: ${isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.35)"};

        --pill-bg:        ${isDark ? "rgba(255,255,255,0.06)"    : "rgba(0,0,0,0.05)"};
        --pill-border:    ${isDark ? "rgba(255,255,255,0.1)"     : "rgba(0,0,0,0.1)"};

        --section-label:  ${isDark ? "rgba(232,232,232,0.35)"    : "rgba(0,0,0,0.35)"};

        --stat-border:    ${isDark ? "rgba(255,255,255,0.08)"    : "rgba(0,0,0,0.1)"};

        --logo-bg:        ${isDark ? "#e8e8e8"                   : "#111111"};
        --logo-stroke:    ${isDark ? "#0a0a0a"                   : "#f5f5f3"};
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body, #root {
        width: 100% !important; max-width: none !important;
        padding: 0 !important; margin: 0 !important;
        background: var(--bg-base);
        transition: background 0.3s ease;
      }

      .grid-bg {
        background-image:
          linear-gradient(var(--grid-line) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
        background-size: 48px 48px;
      }

      .nav-link {
        color: var(--text-muted);
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        transition: color 0.2s;
        cursor: pointer;
      }
      .nav-link:hover { color: var(--text-body); }

      .btn-primary {
        background: var(--btn-primary-bg);
        color: var(--btn-primary-fg);
        border: none;
        padding: 10px 22px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.2s, transform 0.15s;
        text-decoration: none;
        display: inline-block;
      }
      .btn-primary:hover { background: var(--btn-primary-hover); transform: translateY(-1px); }

      .btn-ghost {
        background: transparent;
        color: var(--btn-ghost-fg);
        border: 1px solid var(--btn-ghost-border);
        padding: 10px 22px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;
        font-family: inherit;
        transition: border-color 0.2s, color 0.2s, transform 0.15s;
        text-decoration: none;
        display: inline-block;
      }
      .btn-ghost:hover {
        border-color: var(--btn-ghost-hover-border);
        color: var(--text-body);
        transform: translateY(-1px);
      }

      .feature-card {
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);
        border-radius: 14px;
        padding: 28px;
        transition: border-color 0.3s, background 0.3s;
      }
      .feature-card:hover {
        border-color: var(--border-medium);
        background: var(--bg-hover);
      }

      .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 3px 10px;
        border-radius: 100px;
        font-size: 11px;
        font-weight: 500;
      }

      .table-row {
        border-bottom: 1px solid var(--border-strong);
        transition: background 0.15s;
      }
      .table-row:hover { background: var(--bg-hover); }
      .table-row:last-child { border-bottom: none; }

      .fade-in {
        opacity: 0;
        transform: translateY(18px);
        animation: fadeUp 0.6s ease forwards;
      }
      @keyframes fadeUp {
        to { opacity: 1; transform: translateY(0); }
      }

      .stat-item {
        border-left: 1px solid var(--stat-border);
        padding: 0 40px;
      }
      .stat-item:first-child { border-left: none; padding-left: 0; }

      @media (max-width: 768px) {
        .stat-item { border-left: none; padding: 12px 0; border-top: 1px solid var(--stat-border); }
        .stat-item:first-child { border-top: none; }
      }

      .pill-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--pill-bg);
        border: 1px solid var(--pill-border);
        border-radius: 100px;
        padding: 5px 14px;
        font-size: 12px;
        color: var(--text-muted);
        margin-bottom: 28px;
      }

      .dot-pulse {
        width: 6px; height: 6px;
        background: #4ade80;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
      }
      @keyframes pulse {
        0%,100% { opacity: 1; } 50% { opacity: 0.3; }
      }

      .section-label {
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.12em;
        color: var(--section-label);
        text-transform: uppercase;
        margin-bottom: 14px;
      }

      /* Smooth theme transition */
      *, *::before, *::after {
        transition-property: background-color, border-color, color;
        transition-duration: 0.25s;
        transition-timing-function: ease;
      }
      /* But don't slow down transforms/opacity meant for animations */
      .fade-in, .btn-primary, .btn-ghost, .feature-card {
        transition-property: background-color, border-color, color, transform, opacity;
      }
    `}</style>
  );
}