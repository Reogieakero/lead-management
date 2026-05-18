import { useTheme } from "../../../context/ThemeContext";

const statusColors: Record<string, string> = {
  New: "#4ade80",
  Contacted: "#60a5fa",
  Qualified: "#a78bfa",
  Lost: "#f87171",
};

const mockLeads = [
  { name: "Maria Santos", email: "maria@acme.com", status: "Qualified", source: "Referral", date: "May 14" },
  { name: "James Rivera", email: "james@brand.io", status: "Contacted", source: "Instagram", date: "May 13" },
  { name: "Aiko Tanaka", email: "aiko@growth.co", status: "New", source: "Website", date: "May 12" },
  { name: "Carlos Reyes", email: "carlos@scale.ph", status: "Lost", source: "Website", date: "May 11" },
  { name: "Priya Mehta", email: "priya@nexus.in", status: "Qualified", source: "Referral", date: "May 10" },
];

export default function DashboardPreview() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const surface  = isDark ? "#121212" : "#ffffff";
  const elevated = isDark ? "#161616" : "#f7f7f5";
  const header   = isDark ? "#141414" : "#f0efed";
  const input    = isDark ? "#1a1a1a" : "#eaeae8";
  const border   = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const borderSm = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
  const textPrimary = isDark ? "#e8e8e8" : "#111111";
  const textMuted   = isDark ? "rgba(255,255,255,0.5)"  : "rgba(0,0,0,0.45)";
  const textFaint   = isDark ? "rgba(255,255,255,0.4)"  : "rgba(0,0,0,0.35)";
  const textFainter = isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)";
  const filterBtn   = isDark ? "#161616" : "#ebebea";

  return (
    <>
      {/* Self-contained visibility handler: Hidden on mobile, Flex/Grid layouts on desktop */}
      <style>{`
        .dashboard-container {
          display: none; /* Hidden on mobile devices by default */
          margin-top: 72px;
          border-radius: 18px;
          overflow: hidden;
          text-align: left;
          position: relative;
          z-index: 2;
        }

        /* Desktop and Tablet sizes (>= 768px wide) */
        @media (min-width: 768px) {
          .dashboard-container {
            display: block; /* Becomes visible only on desktop */
          }
        }

        .responsive-stat-grid { display: flex; flex-wrap: wrap; }
        .responsive-stat-item { flex: 1 1 0%; min-width: 120px; }
        .responsive-table-header { display: grid; grid-template-columns: 2fr 2fr 1.2fr 1.2fr 1fr; }
        .responsive-table-row { display: grid; grid-template-columns: 2fr 2fr 1.2fr 1.2fr 1fr; }
      `}</style>

      <div className="dashboard-container fade-in" style={{
        background: surface,
        border: `1px solid ${isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)"}`,
        animationDelay: "0.45s",
        boxShadow: isDark
          ? "0 32px 80px rgba(0,0,0,0.6)"
          : "0 32px 80px rgba(0,0,0,0.12)",
      }}>
        {/* Window chrome */}
        <div style={{
          background: elevated,
          padding: "14px 20px",
          borderBottom: `1px solid ${border}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }}/>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }}/>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }}/>
          <div style={{ flex: 1, textAlign: "center", fontSize: 11, color: textFaint, fontWeight: 400 }}>
            leadflow.app/dashboard
          </div>
        </div>

        {/* Stat grid */}
        <div className="responsive-stat-grid" style={{ padding: "24px", borderBottom: `1px solid ${borderSm}`, background: header }}>
          {[
            { label: "Total leads", val: "248", color: textPrimary },
            { label: "Qualified",   val: "84",  color: "#a78bfa" },
            { label: "Contacted",   val: "67",  color: "#60a5fa" },
            { label: "Conversion",  val: "33.9%", color: "#4ade80" },
          ].map((s) => (
            <div key={s.label} className="responsive-stat-item" style={{ padding: "0 16px" }}>
              <div style={{ fontSize: 11, color: textFaint, marginBottom: 6, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.02em" }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: s.color, fontFamily: "'Sora', sans-serif" }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Search / filter bar */}
        <div style={{ padding: "14px 24px", borderBottom: `1px solid ${borderSm}`, display: "flex", gap: 10, alignItems: "center", background: surface }}>
          <div style={{ flex: 1, background: input, border: `1px solid ${border}`, borderRadius: 8, padding: "8px 12px", fontSize: 12, color: textFaint, display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Search leads...
          </div>
          {["All status", "All sources"].map(f => (
            <div key={f} style={{ background: filterBtn, border: `1px solid ${border}`, borderRadius: 8, padding: "8px 14px", fontSize: 12, color: textMuted, whiteSpace: "nowrap", cursor: "pointer" }}>{f} ▾</div>
          ))}
          <div style={{ background: filterBtn, border: `1px solid ${border}`, borderRadius: 8, padding: "8px 14px", fontSize: 12, color: textPrimary, whiteSpace: "nowrap", display: "flex", gap: 6, alignItems: "center", cursor: "pointer" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export CSV
          </div>
        </div>

        {/* Table layout built cleanly for desktop sizing parameters */}
        <div style={{ background: surface }}>
          <div className="responsive-table-header" style={{ padding: "12px 24px", borderBottom: `1px solid ${borderSm}`, background: header }}>
            {["Name", "Email", "Status", "Source", "Date"].map(h => (
              <div key={h} style={{ fontSize: 11, color: textFaint, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>
          {mockLeads.map((lead) => (
            <div key={lead.email} className="responsive-table-row table-row" style={{ padding: "14px 24px", alignItems: "center", background: surface }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: textPrimary }}>{lead.name}</div>
              <div style={{ fontSize: 12, color: textMuted }}>{lead.email}</div>
              <div>
                <span className="status-badge" style={{
                  background: statusColors[lead.status] + "18",
                  color: statusColors[lead.status],
                  border: `1px solid ${statusColors[lead.status]}30`,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: statusColors[lead.status], display: "inline-block" }}/>
                  {lead.status}
                </span>
              </div>
              <div style={{ fontSize: 12, color: textMuted }}>{lead.source}</div>
              <div style={{ fontSize: 12, color: textFainter }}>{lead.date}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}