import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Checkbox from "../../../components/ui/Checkbox";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login submitted", { email, password, remember });
  };

  return (
    <main className="form-panel">
      <div className="form-content">
        <header className="form-header">
          <div className="mobile-brand-mark">
            <span className="brand-mark__icon">LF</span>
            <span className="brand-mark__name">LeadFlow</span>
          </div>
          <p className="section-label">Welcome back</p>
          <h1>Sign in to LeadFlow</h1>
          <p className="form-subtitle">Enter your credentials to access your dashboard.</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="login-helpers">
            <Checkbox 
              checked={remember} 
              onChange={(e) => setRemember(e.target.checked)}
            >
              Remember me
            </Checkbox>
            <a className="forgot-link" href="#">Forgot password?</a>
          </div>

          <div className="login-actions">
            <Button type="submit" variant="primary" style={{ width: "100%", minHeight: "48px" }}>
              Sign in
            </Button>
          </div>
        </form>

        <footer className="login-footer">
          <span>New to LeadFlow?</span>
          <Link to="/register">Create an account</Link>
        </footer>
      </div>
    </main>
  );
}