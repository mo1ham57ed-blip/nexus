import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
} from "lucide-react";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      localStorage.setItem(
        "nexusLoggedIn",
        "true"
      );

      if (onLogin) {
        onLogin();
      }
    }, 700);
  };

  return (
    <div className="login-page">

      {/* BACKGROUND */}

      <div className="login-background">
        <div className="login-glow login-glow-one" />
        <div className="login-glow login-glow-two" />
      </div>

      {/* MAIN */}

      <main className="login-container">

        {/* LEFT SIDE */}

        <section className="login-intro">

          <div className="login-logo">
            <span>N</span>
            NEXUS
          </div>

          <div className="login-intro-content">

            <div className="login-ai-label">
              <Sparkles size={15} />
              NEXUS INTELLIGENCE
            </div>

            <h1>
              Your campus.
              <br />
              <span>
                Smarter than ever.
              </span>
            </h1>

            <p>
              One intelligent workspace for
              your courses, assignments,
              schedule and AI-powered
              learning.
            </p>

          </div>

          <div className="login-intro-icon">
            <BrainCircuit size={115} />
          </div>

          <div className="login-footer-text">
            NEXUS STUDENT PORTAL
          </div>

        </section>

        {/* LOGIN CARD */}

        <section className="login-card">

          <div className="login-card-header">

            <span className="login-small-label">
              STUDENT PORTAL
            </span>

            <h2>
              Welcome back.
            </h2>

            <p>
              Sign in to continue to your
              NEXUS workspace.
            </p>

          </div>

          <form
            className="login-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}

            <div className="login-field">

              <label htmlFor="email">
                UNIVERSITY EMAIL
              </label>

              <div className="login-input-wrapper">

                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="student@nexus.edu"
                  value={email}
                  onChange={(event) =>
                    setEmail(
                      event.target.value
                    )
                  }
                  autoComplete="email"
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div className="login-field">

              <div className="login-label-row">

                <label htmlFor="password">
                  PASSWORD
                </label>

                <button
                  type="button"
                  className="forgot-button"
                  onClick={() =>
                    setError(
                      "Please contact your university administrator to reset your password."
                    )
                  }
                >
                  Forgot password?
                </button>

              </div>

              <div className="login-input-wrapper">

                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value
                    )
                  }
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (previous) =>
                        !previous
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* ERROR */}

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="login-spinner" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in to NEXUS
                  <ArrowRight size={18} />
                </>
              )}

            </button>

          </form>

          {/* DEMO INFO */}

          <div className="login-demo">

            <div>
              <span>
                DEMO ACCESS
              </span>

              <strong>
                Any valid email + password
              </strong>
            </div>

          </div>

          <div className="login-security">
            <LockKeyhole size={14} />
            Secure student access
          </div>

        </section>

      </main>

    </div>
  );
}

export default Login;