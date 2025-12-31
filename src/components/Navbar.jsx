import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="logo">QuickDealsGhana</Link>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

        {!user ? (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        ) : (
          <>
            <Link to="/wallet" onClick={() => setMenuOpen(false)}>
              Wallet (GH₵ {user.balance.toFixed(2)})
            </Link>
            <span className="auth-user">Hello, {user.name}</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
