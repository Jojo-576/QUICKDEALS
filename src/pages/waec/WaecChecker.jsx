import React, { useState } from "react";
import "./WaecChecker.css";
import waecLogo from "../../assets/networks/waec.png"; // make sure logo exists


export default function WaecChecker() {
  const [examType, setExamType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form captured successfully (payment coming next)");
  };

  return (
    <div className="waec-page">
      <div className="waec-card">

        {/* LOGO */}
        <img src={waecLogo} alt="WAEC Logo" className="waec-logo" />

        {/* TITLE */}
        <h2 className="waec-title">WAEC Results Checker</h2>
        <p className="waec-subtitle">
          Get your WASSCE & BECE checker instantly
        </p>

        <form onSubmit={handleSubmit}>

          {/* EXAM TYPE */}
          <label className="waec-label">Select Examination Type</label>
          <select
            className="waec-input"
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            required
          >
            <option value="">-- Choose Exam Type --</option>
            <option value="WASSCE_SCHOOL">WASSCE (School)</option>
          
            <option value="BECE">BECE</option>
          </select>

          {/* FULL NAME */}
          <label className="waec-label">Full Name</label>
          <input
            type="text"
            className="waec-input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* EMAIL */}
          <label className="waec-label">Email Address</label>
          <input
            type="email"
            className="waec-input"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* PHONE */}
          <label className="waec-label">Mobile Number</label>
          <input
            type="tel"
            className="waec-input"
            placeholder="0551234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* BUY NOW */}
          <button type="submit" className="waec-btn">
            Buy Now
          </button>

        </form>
      </div>
    </div>
  );
}
