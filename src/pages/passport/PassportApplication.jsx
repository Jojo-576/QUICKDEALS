import React, { useState } from "react";
import "./PassportApplication.css";

export default function PassportApplication() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");

  const prices = {
    normal: 600,
    instant: 1200,
  };

  const isWhatsappValid = /^\d{10}$/.test(whatsapp);

  const canProceed =
    type &&
    name.trim() &&
    email.trim() &&
    isWhatsappValid;

  const handleWhatsappChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setWhatsapp(value);

    if (value && value.length !== 10) {
      setError("WhatsApp number must be exactly 10 digits");
    } else {
      setError("");
    }
  };

  const handleProceed = () => {
    if (!isWhatsappValid) {
      setError("WhatsApp number must be exactly 10 digits");
      return;
    }

    alert("Submitted successfully. You will be contacted shortly.");
  };

  return (
    <div className="passport-app-page">
      {/* HEADER */}
      <header className="passport-app-header">
        <h1>Passport Application</h1>
        <p>
          Choose your passport type and enter your details.
          Our team will contact you immediately.
        </p>
      </header>

      {/* FORM (VERTICAL) */}
      <section className="passport-form-vertical">
        <div className="form-group">
          <label>Passport Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Select option</option>
            <option value="normal">Normal Passport</option>
            <option value="instant">Instant Passport</option>
          </select>
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Active WhatsApp Number</label>
          <input
            type="tel"
            placeholder="0551234567"
            value={whatsapp}
            maxLength={10}
            onChange={handleWhatsappChange}
          />
          {error && <p className="error-text">{error}</p>}
        </div>
      </section>

      {/* PRICE */}
      {type && (
        <div className="passport-price-box">
          <strong>Price:</strong> GH₵ {prices[type].toFixed(2)}
        </div>
      )}

      {/* NOTE */}
      <div className="passport-note">
        ⚠️ <strong>Note:</strong> After clicking <b>Proceed</b>, you will be
        contacted within a few seconds.
      </div>

      {/* PROCEED BUTTON */}
      <button
        className={`passport-proceed-btn ${canProceed ? "active" : ""}`}
        disabled={!canProceed}
        onClick={handleProceed}
      >
        Proceed
      </button>
    </div>
  );
}
