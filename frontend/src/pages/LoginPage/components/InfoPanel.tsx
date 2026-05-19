interface InfoPanelProps {
  isDark: boolean;
}

export default function InfoPanel({ isDark }: InfoPanelProps) {
  return (
    <section className="info-panel grid-bg">
      <div className="info-content fade-in">
        <div className="brand-mark">
          <span className="brand-mark__icon">LF</span>
          <span className="brand-mark__name">LeadFlow</span>
        </div>
        
        <h2>Supercharge your sales pipeline.</h2>
        <p className="info-description">
          Manage leads, track conversions, and accelerate deals all within a unified workspace built for high-performance teams.
        </p>

        <div className="features-list">
          <div className="feature-item">
            <span className="dot-pulse"></span>
            <div>
              <p className="feature-title">Real-time Activity</p>
              <p className="feature-desc">Instantly see when hot prospects interact with your emails.</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="bullet-dot"></span>
            <div>
              <p className="feature-title">Automated Routing</p>
              <p className="feature-desc">Pass incoming leads to the right reps without lifting a finger.</p>
            </div>
          </div>
        </div>

        <div className="info-footer">
          <p className="footer-meta">Trusted by forward-thinking sales teams worldwide.</p>
        </div>
      </div>
    </section>
  );
}