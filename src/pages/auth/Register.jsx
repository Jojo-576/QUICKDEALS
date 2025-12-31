import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Register.css";

export default function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      name: form.name,
      email: form.email,
      password: form.password,
      balance: 0,
    };

    localStorage.setItem("qd_registered_user", JSON.stringify(newUser));
    login(newUser);
    navigate("/");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        {/* LEFT */}
        <div className="register-left">
          <h1>QUICK DEALS GHANA</h1>
          <p className="tagline">
            Create your account and start enjoying great deals.
          </p>

          <Link to="/login" className="back-login-btn">
            BACK TO LOGIN
          </Link>
        </div>

        {/* RIGHT */}
        <div className="register-right">
          <h2>Create Account</h2>
          <p className="subtitle">Fill the form below to get started</p>

          <form onSubmit={handleSubmit}>
            <div className="input-grid">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                  👁
                </span>
              </div>

              <div className="password-field">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span onClick={() => setShowConfirm(!showConfirm)}>
                  👁
                </span>
              </div>
            </div>

            <button type="submit" className="create-btn">
              CREATE ACCOUNT
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>

        {/* ANIMATED DOT */}
        <div className="floating-dot"></div>
      </div>
    </div>
  );
}
