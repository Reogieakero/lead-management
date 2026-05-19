import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Checkbox from "../../../components/ui/Checkbox";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Store token if provided
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          {error && <div style={{ color: "#ef4444", fontSize: "14px", marginBottom: "12px" }}>{error}</div>}

          <div className="login-helpers">
            <Checkbox 
              checked={remember} 
              onChange={(e) => setRemember(e.target.checked)}
              disabled={loading}
            >
              Remember me
            </Checkbox>
            <a className="forgot-link" href="#">Forgot password?</a>
          </div>

          <div className="login-actions">
            <Button 
              type="submit" 
              variant="primary" 
              style={{ width: "100%", minHeight: "48px" }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
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