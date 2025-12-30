import React, { useState } from "react";
import "./BirthCertificate.css";

export default function BirthCertificate() {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [errors, setErrors] = useState({});

  const prices = {
    normal: 400,
    instant: 800,
  };

  // ✅ LIVE WHATSAPP VALIDATION
  const handleWhatsappChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setWhatsapp(value);

    if (value.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        whatsapp: "WhatsApp number must be exactly 10 digits",
      }));
    } else {
      setErrors((prev) => {
        const { whatsapp, ...rest } = prev;
        return rest;
      });
    }
  };

  const canProceed =
    type &&
    name.trim() &&
    email.trim() &&
    /^\d{10}$/.test(whatsapp);

  const handleProceed = () => {
    if (!canProceed) return;
    alert("Birth Certificate request submitted — you will be contacted shortly");
  };

  return (
    <div className="birth-page">
      {/* HEADER */}
      <header className="birth-header">
        <h1>Birth Certificate</h1>
        <p>
          Choose your certificate type and enter your details.
          Our team will contact you shortly after submission.
        </p>
      </header>

      {/* FORM (VERTICAL) */}
      <section className="birth-form">
        <div className="form-group">
          <label>Certificate Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select option</option>
            <option value="normal">Normal</option>
            <option value="instant">Instant</option>
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
            onChange={handleWhatsappChange}
          />
          {errors.whatsapp && (
            <p className="error-text">{errors.whatsapp}</p>
          )}
        </div>
      </section>

      {/* PRICE */}
      {type && (
        <div className="birth-price">
          <strong>Price:</strong> GH₵ {prices[type].toFixed(2)}
        </div>
      )}

      {/* NOTE */}
      <div className="birth-note">
        ⚠️ <strong>Note:</strong> After clicking <b>Proceed</b>, you will be
        contacted within a few seconds.
      </div>

      {/* PROCEED */}
      <button
        className={`birth-proceed-btn ${canProceed ? "active" : ""}`}
        disabled={!canProceed}
        onClick={handleProceed}
      >
        Proceed
      </button>
    </div>
  );
}
