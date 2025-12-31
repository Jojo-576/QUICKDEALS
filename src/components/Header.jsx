import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">QUICK DEALS GHANA</Link>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <nav className={`nav ${open ? "open" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>

          {!user ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/wallet" onClick={() => setOpen(false)}>
                Wallet (GH₵ {user.balance.toFixed(2)})
              </Link>
              <span className="hello">Hello {user.name}</span>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}