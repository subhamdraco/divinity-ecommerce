import { useState } from "react";
import "./Index.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const passwordStrength = () => {
    const p = form.password;
    if (p.length < 6) return "Weak";
    if (/[A-Z]/.test(p) && /\d/.test(p)) return "Strong";
    return "Medium";
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    const res = await fetch("https://divinityimpex.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        password: form.password
      })
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      setError(data.error || "Registration failed");
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-brand">
        <h1>Join <span>Divinity</span></h1>
        <p>
          Create your account and access premium
          products crafted with trust and excellence.
        </p>
      </div>

      <div className="auth-panel">
        <form className="auth-card" onSubmit={submit}>
          <h2>Create Account</h2>
          <p>Begin your journey with us</p>

          {error && <p style={{ color: "#c0392b" }}>{error}</p>}

          <div className="field">
            <input
              name="name"
              placeholder=" "
              value={form.name}
              onChange={onChange}
              required
            />
            <label>Full name</label>
          </div>

          <div className="field">
            <input
              name="email"
              placeholder=" "
              value={form.email}
              onChange={onChange}
              required
            />
            <label>Email address</label>
          </div>

          <div className="field">
            <input
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={onChange}
              required
            />
            <label>Password</label>
          </div>

          <div style={{ fontSize: ".8rem", marginBottom: "1.2rem", color: "#7b8a99" }}>
            Strength: <strong>{passwordStrength()}</strong>
          </div>

          <div className="field">
            <input
              type="password"
              name="confirm"
              placeholder=" "
              value={form.confirm}
              onChange={onChange}
              required
            />
            <label>Confirm password</label>
          </div>

          <button className="auth-btn" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </button>

          <div className="auth-footer">
            Already have an account? <a href="/login">Sign in</a>
          </div>
        </form>
      </div>
    </div>
  );
}
