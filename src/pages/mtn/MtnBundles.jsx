import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADDED
import "./MtnBundles.css";
import mtnLogo from "../../assets/networks/mtn.png";

export default function MtnBundles() {
  const navigate = useNavigate(); // ✅ ADDED

  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});

  const pricePerGB = 5;
  const totalPrice = selectedSize * pricePerGB * quantity;

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};

    if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number (numbers only)";
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

  navigate("/payment/mtn", {
    state: {
      dataSize: selectedSize,
      quantity,
      price: totalPrice,              // ✅ matches payment page
      recipientNumber: phone,          // ✅ renamed
      recipientName: name,             // ✅ renamed
      email,
    },
  });
};


  return (
    <div className="bundle-page mtn">
      <div className="bundle-container">

        <div className="bundle-logo-box">
          <img src={mtnLogo} alt="MTN Logo" className="bundle-logo" />
        </div>

        <h2 className="bundle-title">MTN DATA BUNDLES</h2>

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

        <p className="bundle-price">
          Price: <strong>GH₵ {totalPrice.toFixed(2)}</strong>
        </p>

        <label className="bundle-label">Recipient Number</label>
        <input
          type="tel"
          className="bundle-input"
          placeholder="0551234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}

        <label className="bundle-label">Recipient Name</label>
        <input
          type="text"
          className="bundle-input"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <label className="bundle-label">Email</label>
        <input
          type="email"
          className="bundle-input"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <label className="bundle-label">Quantity</label>
        <input
          type="number"
          className="bundle-input"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button className="bundle-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
