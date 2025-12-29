import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import airtelTigoLogo from "../../assets/networks/airteltigo.png";

export default function AirtelTigoPayment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="payment-page">
        <p>Invalid payment session</p>
      </div>
    );
  }

  const {
    dataSize,
    quantity,
    price,
    recipientNumber,
    recipientName,
    email,
  } = state;

  return (
    <div className="payment-page">
      <div className="payment-card">

        {/* LOGO */}
        <img src={airtelTigoLogo} alt="AirtelTigo" className="payment-logo" />

        <h2 className="payment-title">Confirm Your Order</h2>

        {/* SUMMARY */}
        <div className="summary-box">
          <p><strong>Network:</strong> AirtelTigo</p>
          <p><strong>Data Size:</strong> {dataSize} GB</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Recipient:</strong> {recipientName}</p>
          <p><strong>Phone:</strong> {recipientNumber}</p>
          <p><strong>Email:</strong> {email}</p>
          <hr />
          <p className="total">
            Total Amount: <strong>GH₵ {price.toFixed(2)}</strong>
          </p>
        </div>

        {/* PAYMENT INPUT */}
        <label>Mobile Money Number</label>
        <input
          type="tel"
          placeholder="055XXXXXXX"
          className="payment-input"
        />

        <button className="pay-btn">Pay Now</button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}
