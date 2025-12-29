import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="auth-bar">
      <Link to="/">Home</Link>

      {!user ? (
        <>
          <Link to="/login" className="auth-btn login">Login</Link>
          <Link to="/register" className="auth-btn register">Register</Link>
        </>
      ) : (
        <>
          <Link to="/wallet" className="auth-btn wallet">
            Wallet (GH₵ {user.balance.toFixed(2)})
          </Link>
          <span className="auth-user">Hello, {user.name}</span>
          <button onClick={logout} className="auth-btn logout">Logout</button>
        </>
      )}
    </div>
  );
}

export default Navbar;
