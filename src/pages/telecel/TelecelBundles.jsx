import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TelecelBundles.css";
import telecelLogo from "../../assets/networks/telecel.png";

export default function TelecelBundles() {
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const pricePerGB = 5;
  const totalPrice = selectedSize * pricePerGB * quantity;

  // ✅ VALIDATION (same logic as MTN)
  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (name.trim() === "") {
      newErrors.name = "Recipient name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBuyNow = () => {
    if (!validateForm()) return;

    // ✅ GO TO TELECEL PAYMENT PAGE
    navigate("/payment/telecel", {
      state: {
        network: "Telecel",
        dataSize: selectedSize,
        quantity,
        price: totalPrice,
        recipientNumber: phone,
        recipientName: name,
        email,
      },
    });
  };

  return (
    <div className="bundle-page telecel">
      <div className="bundle-container">

        {/* LOGO */}
        <div className="bundle-logo-box">
          <img src={telecelLogo} alt="Telecel Logo" className="bundle-logo" />
        </div>

        {/* TITLE */}
        <h2 className="bundle-title">TELECEL DATA BUNDLES</h2>

        {/* DATA SIZE */}
        <label className="bundle-label">Data Size (GB)</label>
        <select
          className="bundle-select"
          value={selectedSize}
          onChange={(e) => setSelectedSize(Number(e.target.value))}
        >
          {Array.from({ length: 100 }, (_, i) => i + 1).map((gb) => (
            <option key={gb} value={gb}>{gb} GB</option>
          ))}
        </select>

        {/* PRICE */}
        <p className="bundle-price">
          Price: <strong>GH₵ {totalPrice.toFixed(2)}</strong>
        </p>

        {/* PHONE */}
        <label className="bundle-label">Recipient Number</label>
        <input
          type="tel"
          className="bundle-input"
          placeholder="0551234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}

        {/* NAME */}
        <label className="bundle-label">Recipient Name</label>
        <input
          type="text"
          className="bundle-input"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        {/* EMAIL */}
        <label className="bundle-label">Email</label>
        <input
          type="email"
          className="bundle-input"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        {/* QUANTITY */}
        <label className="bundle-label">Quantity</label>
        <input
          type="number"
          className="bundle-input"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        {/* BUY */}
        <button className="bundle-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
