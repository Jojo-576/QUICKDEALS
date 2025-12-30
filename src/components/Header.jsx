import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="top-header">
      <div className="header-inner">
        {/* LEFT: SITE NAME */}
        <div className="site-name">
          QUICK DEALS GHANA
        </div>

        {/* RIGHT: NAV LINKS */}
        <nav className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/Wallet">Wallet</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
