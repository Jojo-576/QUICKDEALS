import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔐 YOUR LOGIN LOGIC (UNCHANGED)
  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(
      localStorage.getItem("qd_registered_user")
    );

    if (
      !storedUser ||
      storedUser.email !== form.email ||
      storedUser.password !== form.password
    ) {
      alert("Invalid login details");
      return;
    }

    login(storedUser);
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        
        {/* LEFT PANEL */}
        <div className="login-left">
          <h1>QUICK DEALS GHANA</h1>
          <p className="tagline">Join our family</p>

          <Link to="/register" className="create-account-btn">
            CREATE ACCOUNT
          </Link>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h2>Sign In</h2>
          <p className="subtitle">login with your email or phone</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="login-btn">
              SIGN IN
            </button>
          </form>

          <p className="auth-switch">
            Oh! If you do not have an account,{" "}
            <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>

      {/* BOTTOM NOTE */}
      <p className="login-note">
        ⚠️ You must log in before you can access the wallet.
      </p>
    </div>
  );
}
