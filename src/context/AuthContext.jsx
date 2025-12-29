import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🔄 Load user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("qd_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔐 LOGIN (ENSURE WALLET EXISTS)
  const login = (userData) => {
    const userWithWallet = {
      ...userData,
      wallet: userData.wallet || {
        balance: 0,
        totalTopUps: 0,
      },
    };

    setUser(userWithWallet);
    localStorage.setItem("qd_user", JSON.stringify(userWithWallet));
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("qd_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
