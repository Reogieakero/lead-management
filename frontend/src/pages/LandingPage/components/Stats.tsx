const stats = [
  { value: "10k+", label: "Leads tracked" },
  { value: "98%",  label: "Conversion visibility" },
  { value: "3x",   label: "Faster pipeline" },
  { value: "500+", label: "Sales teams" },
];

export default function Stats() {
  return (
    <section style={{ 
      background: "var(--bg-surface, transparent)",
      overflow: "hidden"
    }}>
      <style>{`
        .stats-section {
          padding: 60px 40px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          max-width: 1120px;
          margin: 0 auto;
        }
        .stat-item {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          /* Explicitly ensuring no borders are drawn on top of the elements */
          border: none !important;
          border-top: 0px solid transparent !important;
          padding-top: 0px;
        }
        .stat-value {
          font-family: 'Sora', sans-serif;
          font-size: 40px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: -0.03em;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 8px;
          font-weight: 400;
          letter-spacing: -0.01em;
        }

        /* Tablet Breakpoint */
        @media (max-width: 900px) {
          .stats-section {
            padding: 48px 24px;
          }
          .stats-grid {
            gap: 16px;
          }
          .stat-value {
            font-size: 32px;
          }
          .stat-label {
            font-size: 13px;
          }
        }

        /* Mobile Breakpoint - Single Row, Fits All Screens, No Scroll */
        @media (max-width: 600px) {
          .stats-section {
            padding: 32px 12px;
          }
          .stats-grid {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 4px;
            overflow: hidden;
          }
          .stat-item {
            flex: 1;
            min-width: 0;
            border: none !important;
            border-top: 0px solid transparent !important;
          }
          .stat-value {
            font-size: 24px;
            letter-spacing: -0.02em;
          }
          .stat-label {
            font-size: 11px;
            margin-top: 4px;
            line-height: 1.2;
            padding: 0 2px;
          }
        }
      `}</style>

      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}