import React, { useState } from "react";
import "./BusinessCertificate.css";

export default function BusinessCertificate() {
  const [businessType, setBusinessType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [error, setError] = useState("");

  const isWhatsappValid = /^\d{10}$/.test(whatsapp);

  const canProceed =
    businessType &&
    businessName.trim() &&
    ownerName.trim() &&
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

    alert("Business certificate request submitted. We will contact you shortly.");
  };

  return (
    <div className="business-page">
      {/* HEADER */}
      <header className="business-header">
        <h1>Business Certificate</h1>
        <p>
          Register your business with the Registrar General.
          Fill in the form below and our team will contact you immediately.
        </p>
      </header>

      {/* FORM */}
      <section className="business-form">
        <div className="form-group">
          <label>Business Type</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option value="">Select business type</option>
            <option value="sole">Sole Proprietorship</option>
            <option value="partnership">Partnership</option>
            <option value="limited">Limited Liability Company</option>
          </select>
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            placeholder="Enter proposed business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Owner / Director Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
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
            maxLength={10}
          />
          {error && <p className="error-text">{error}</p>}
        </div>
      </section>

      {/* NOTE */}
      <div className="business-note">
        ⚠️ <strong>Note:</strong> After clicking <b>Proceed</b>, you will be
        contacted within a few seconds.
      </div>

      {/* BUTTON */}
      <button
        className={`business-btn ${canProceed ? "active" : ""}`}
        disabled={!canProceed}
        onClick={handleProceed}
      >
        Proceed
      </button>
    </div>
  );
}
