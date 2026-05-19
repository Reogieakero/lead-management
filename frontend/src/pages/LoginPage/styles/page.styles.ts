export const getLoginStyles = (isDark: boolean) => `
  .login-container {
    min-height: 100vh;
    min-height: -webkit-fill-available; 
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    background: var(--bg-base);
    color: var(--text-body);
    font-family: 'DM Sans', 'Sora', system-ui, sans-serif;
  }

  .info-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px;
    border-right: 1px solid var(--border-subtle);
    background-color: var(--bg-surface);
    position: relative;
    overflow: hidden;
  }

  .info-content {
    max-width: 480px;
    display: grid;
    gap: 32px;
  }

  .info-panel h2 {
    font-family: 'Sora', sans-serif;
    font-size: clamp(2rem, 2.5vw, 2.75rem);
    color: var(--text-primary);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  .info-description {
    color: var(--text-muted);
    line-height: 1.6;
    font-size: 16px;
  }

  .brand-mark {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .mobile-brand-mark {
    display: none;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .brand-mark__icon {
    width: 38px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: var(--logo-bg);
    color: var(--logo-stroke);
    font-weight: 700;
    font-size: 13px;
  }

  .brand-mark__name {
    font-family: 'Sora', sans-serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .features-list {
    display: grid;
    gap: 22px;
    margin-top: 8px;
  }

  .feature-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }

  .feature-item .dot-pulse {
    margin-top: 8px;
  }

  .bullet-dot {
    width: 6px;
    height: 6px;
    background: ${isDark ? "#a78bfa" : "#7c3aed"};
    border-radius: 50%;
    margin-top: 8px;
    flex-shrink: 0;
  }

  .feature-title {
    font-weight: 500;
    color: var(--text-primary);
    font-size: 15px;
    margin-bottom: 2px;
  }

  .feature-desc {
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
  }

  .footer-meta {
    font-size: 11px;
    letter-spacing: 0.08em;
    color: var(--text-faint);
    text-transform: uppercase;
  }

  .form-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 64px 48px;
    background: var(--bg-base);
  }

  .form-content {
    width: 100%;
    max-width: 380px;
    display: grid;
    gap: 32px;
  }

  .form-header h1 {
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    color: var(--text-primary);
    margin-top: 6px;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }

  .form-subtitle {
    color: var(--text-muted);
    font-size: 15px;
  }

  .login-form {
    display: grid;
    gap: 24px;
    margin-top: 8px;
  }

  .floating-label-group {
    position: relative;
    width: 100%;
  }

  .login-input {
    width: 100%;
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text-primary);
    padding: 16px 14px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.2s ease;
    -webkit-appearance: none;
  }

  .login-input:focus {
    border-color: ${isDark ? "#a78bfa" : "#7c3aed"};
  }

  .floating-label {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: var(--text-muted);
    font-size: 16px;
    font-weight: 400;
    pointer-events: none;
    transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease, background-color 0.2s ease;
    transform-origin: left top;
    padding: 0 4px;
  }

  .login-input:focus ~ .floating-label,
  .login-input:not(:placeholder-shown) ~ .floating-label {
    transform: translateY(-150%) scale(0.8);
    color: ${isDark ? "#a78bfa" : "#7c3aed"};
    font-weight: 500;
    background-color: var(--bg-base);
  }

  .login-input:not(:placeholder-shown):not(:focus) ~ .floating-label {
    color: var(--text-muted);
    background-color: var(--bg-base);
  }

  .login-helpers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .checkbox-label {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--text-muted);
    font-size: 14px;
    cursor: pointer;
    min-height: 24px;
  }

  .checkbox-label input {
    width: 18px;
    height: 18px;
    accent-color: var(--btn-primary-bg);
    cursor: pointer;
  }

  .forgot-link {
    color: var(--text-muted);
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;
    padding: 4px 0;
  }

  .forgot-link:hover {
    color: var(--text-primary);
  }

  .login-footer {
    display: flex;
    justify-content: center;
    gap: 6px;
    color: var(--text-muted);
    font-size: 14px;
    border-top: 1px solid var(--border-subtle);
    padding-top: 24px;
    flex-wrap: wrap;
  }

  .login-footer a {
    color: var(--text-primary);
    font-weight: 600;
    text-decoration: none;
  }
  
  .login-footer a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    .login-container {
      grid-template-columns: 1fr;
    }
    .info-panel {
      display: none;
    }
    .form-panel {
      padding: 48px 24px;
    }
    .mobile-brand-mark {
      display: flex;
    }
  }

  @media (max-width: 480px) {
    .form-panel {
      padding: 32px 16px;
    }
    .form-header h1 {
      font-size: 24px;
    }
    .form-content {
      gap: 24px;
    }
    .login-helpers {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
`;