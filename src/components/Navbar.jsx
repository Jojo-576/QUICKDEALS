import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="auth-space">
      {/* HAMBURGER ICON (MOBILE) */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <div className={`auth-bar ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>

        {!user ? (
          <>
            <Link to="/login" className="auth-btn login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link to="/register" className="auth-btn register" onClick={() => setOpen(false)}>
              Register
            </Link>
          </>
        ) : (
          <>
            <Link to="/wallet" className="auth-btn wallet" onClick={() => setOpen(false)}>
              Wallet (GH₵ {user.balance?.toFixed(2)})
            </Link>
            <span className="auth-user">Hello, {user.name}</span>
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="auth-btn logout"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
