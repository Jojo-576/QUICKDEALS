import { useState } from "react";
import "./Wallet.css";

export default function Wallet() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [wallet, setWallet] = useState({
    balance: 0,
    totalTopUps: 0,
  });

  const [transactions, setTransactions] = useState([]);

  const [amount, setAmount] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [phone, setPhone] = useState("");

  const handleTopUp = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0 || !phone) {
      alert("Please fill all fields");
      return;
    }

    const topUpAmount = Number(amount);

    setWallet((prev) => ({
      balance: prev.balance + topUpAmount,
      totalTopUps: prev.totalTopUps + topUpAmount,
    }));

    setTransactions((prev) => [
      {
        id: Date.now(),
        type: "Top Up",
        amount: topUpAmount,
        network,
        phone,
        date: new Date().toLocaleString(),
      },
      ...prev,
    ]);

    alert("Top up successful 🎉");

    setAmount("");
    setPhone("");
    setActiveTab("dashboard");
  };

  return (
    <div className="wallet-page">
      <div className="wallet-container">

        {/* SIDEBAR */}
        <div className="wallet-sidebar">
          <h3>My Wallet</h3>

          <button
            className={`wallet-btn ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            💼 Wallet Dashboard
          </button>

          <button
            className={`wallet-btn ${activeTab === "topup" ? "active" : ""}`}
            onClick={() => setActiveTab("topup")}
          >
            ➕ Wallet Top Up
          </button>

          <button
            className={`wallet-btn ${activeTab === "transactions" ? "active" : ""}`}
            onClick={() => setActiveTab("transactions")}
          >
            📜 Transactions
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="wallet-main">

          {/* DASHBOARD */}
          {activeTab === "dashboard" && (
            <div className="wallet-cards">
              <div className="wallet-card">
                <p>Available Balance</p>
                <h2>GH₵ {wallet.balance.toFixed(2)}</h2>
              </div>

              <div className="wallet-card">
                <p>Total Top-Ups</p>
                <h2>GH₵ {wallet.totalTopUps.toFixed(2)}</h2>
              </div>
            </div>
          )}

          {/* TOP UP */}
          {activeTab === "topup" && (
            <div className="wallet-topup">
              <h3>Top Up Wallet</h3>

              <form onSubmit={handleTopUp}>
                <input
                  type="number"
                  placeholder="Enter Amount (GH₵)"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <select
                  value={network}
                  onChange={(e) => setNetwork(e.target.value)}
                >
                  <option>MTN</option>
                  <option>Telecel</option>
                  <option>AirtelTigo</option>
                </select>

                <input
                  type="tel"
                  placeholder="Mobile Money Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                {/* 🔥 BLACK VISIBLE BUTTON */}
                <button type="submit" className="topup-submit-btn">
                  TOP UP WALLET
                </button>
              </form>
            </div>
          )}

          {/* TRANSACTIONS */}
          {activeTab === "transactions" && (
            <div className="wallet-transactions">
              <h3>Transaction History</h3>

              {transactions.length === 0 ? (
                <p className="empty">No transactions yet</p>
              ) : (
                <ul>
                  {transactions.map((tx) => (
                    <li key={tx.id} className="transaction-item">
                      <div>
                        <strong>{tx.type}</strong>
                        <span>{tx.date}</span>
                      </div>
                      <div>
                        <span>{tx.network}</span>
                        <strong>GH₵ {tx.amount}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
