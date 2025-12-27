import { useState } from "react";
import { useAuth } from "../../components/context/AuthContext";

import "./Index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [isValid, setisValid] = useState(true)

  const submit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://divinityimpex.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      login(data);
      window.location.href = "/";
    }
    else { setisValid(false) }
  };

  return (
    <div className="auth-wrap">
      
      <div className="auth-brand">
        <h1>Divinity <span>Impex</span></h1>
        <p>
          Trusted brands. Thoughtfully crafted.
          Delivering quality, performance, and care.
        </p>
      </div>

      <div className="auth-panel">
        {!isValid && <div className="alert alert-danger" role="alert">
        Invalid username or password
      </div>}
        <form className="auth-card" onSubmit={submit}>
          <h2>Welcome Back</h2>
          <p>Please sign in to your account</p>

          <div className="field">
            <input placeholder=" " value={email}
              onChange={e => setEmail(e.target.value)} />
            <label>Email address</label>
          </div>

          <div className="field">
            <input type="password" placeholder=" "
              value={password}
              onChange={e => setPassword(e.target.value)} />
            <label>Password</label>
          </div>

          <button className="auth-btn">Sign In</button>

          <div className="auth-footer">
            Don’t have an account? <a href="/register">Create one</a>
          </div>
        </form>
      </div>
    </div>
  );
}
