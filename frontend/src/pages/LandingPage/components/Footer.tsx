export default function Footer() {
  return (
    <footer className="footer-section" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <style>{`
        .footer-section {
          padding: 32px 40px;
        }
        .footer-container {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        /* Mobile Breakpoint - Stack content neatly */
        @media (max-width: 600px) {
          .footer-section {
            padding: 24px 16px;
          }
          .footer-container {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }
        }
      `}</style>
      <div className="footer-container">
        {/* Brand Asset */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 22, height: 22, background: "var(--logo-bg)", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--logo-stroke)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
          </div>
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-muted)" }}>LeadFlow</span>
        </div>
        
        {/* Project Disclaimer */}
        <p style={{ fontSize: 12, color: "var(--text-muted)", opacity: 0.6, margin: 0 }}>
          Smart Leads Dashboard — MERN Internship Assignment
        </p>
      </div>
    </footer>
  );
}