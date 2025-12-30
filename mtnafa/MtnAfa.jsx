import React, { useState } from "react";
import "./MtnAfa.css";
import afaImg from "../../assets/networks/afa.png";

export default function MtnAfa() {
  const [regNumber, setRegNumber] = useState("");
  const [qty, setQty] = useState(1);

  const handleBuy = () => {
    if (!regNumber) {
      alert("Please enter Registration Number");
      return;
    }

    alert("MTN AFA Registration added (demo)");
  };

  return (
    <div className="afa-page">
      <div className="afa-card">
        
        {/* LEFT IMAGE */}
        <div className="afa-image">
          <img src={afaImg} alt="MTN AFA Registration" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="afa-content">
          <span className="afa-category">Afa Registration</span>

          <h1 className="afa-title">MTN AFA Registration</h1>

          <div className="afa-price">
            <span className="old-price">₵20.00</span>
            <span className="new-price">₵17.50</span>
          </div>

          <label className="afa-label">Registration Number</label>
          <input
            type="number"
            placeholder="Enter registration number"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="afa-input"
          />

          <div className="afa-actions">
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="afa-qty"
            />

            <button className="afa-buy" onClick={handleBuy}>
              Buy now
            </button>
          </div>

          <p className="afa-footer">
            Category: <span>Afa Registration</span>
          </p>
        </div>
      </div>
    </div>
  );
}
