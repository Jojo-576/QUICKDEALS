import React, { useState } from "react";
import "./UniversityForms.css";

const PRICES = {
  UG: {
    undergraduate: 200,
    postgraduate: 250,
    diploma: 150,
    topup: 180,
    mature: 220,
  },
  KNUST: {
    undergraduate: 220,
    postgraduate: 260,
    diploma: 160,
    topup: 190,
    mature: 230,

    
    
  },
  UEW: {
    undergraduate: 220,
    postgraduate: 260,
    diploma: 160,
    topup:190,
    mature: 230

    },

  

  OTHERS: {
    undergraduate: 180,
    postgraduate: 200,
    diploma: 140,
    topup: 160,
    mature: 190,
  },
};

export default function UniversityForms() {
  const [university, setUniversity] = useState("");
  const [otherUni, setOtherUni] = useState("");
  const [category, setCategory] = useState("");
  const [personal, setPersonal] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const uniKey = university === "OTHERS" ? "OTHERS" : university;
  const price =
    uniKey && category ? PRICES[uniKey]?.[category] : null;

  const personalComplete =
    personal.name && personal.email && personal.phone;

  return (
    <div className="uni-page">
      {/* HEADER */}
      <header className="uni-header">
        <h1>University Forms Purchase</h1>
        <p>
          Select your university, application category and provide your
          personal details to proceed.
        </p>
      </header>

      {/* UNIVERSITY */}
      <section className="uni-section">
        <label>Select University</label>
        <select
          value={university}
          onChange={(e) => {
            setUniversity(e.target.value);
            setCategory("");
          }}
        >
          <option value="">-- Choose University --</option>
          <option value="UG">University of Ghana</option>
          <option value="KNUST">KNUST</option>
          <option value="UCC">UCC</option>
          <option value="UEW">UEW</option>
          <option value="UPSA">UPSA</option>
          <option value="UMAT">UMAT</option>
          <option value="OTHERS">Others</option>
        </select>

        {university === "OTHERS" && (
          <input
            type="text"
            placeholder="Enter University Name"
            value={otherUni}
            onChange={(e) => setOtherUni(e.target.value)}
          />
        )}
      </section>

      {/* CATEGORY */}
      <section
        className={`uni-section ${
          university ? "active" : "locked"
        }`}
      >
        <label>Application Category</label>
        <select
          disabled={!university}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">-- Select Category --</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="diploma">Diploma</option>
          <option value="topup">Top-Up</option>
          <option value="mature">Mature / Distance</option>
        </select>
      </section>

      {/* PERSONAL INFO */}
      <section
        className={`uni-section ${
          category ? "active" : "locked"
        }`}
      >
        <h3>Personal Information</h3>
        <input
          type="text"
          placeholder="Full Name"
          value={personal.name}
          onChange={(e) =>
            setPersonal({ ...personal, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email Address"
          value={personal.email}
          onChange={(e) =>
            setPersonal({ ...personal, email: e.target.value })
          }
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={personal.phone}
          onChange={(e) =>
            setPersonal({ ...personal, phone: e.target.value })
          }
        />
      </section>

      {/* PRICE */}
      {price && (
        <div className="price-box">
          Form Price: <strong>GH₵ {price}</strong>
        </div>
      )}

      {/* BUTTON */}
      <button
        className={`proceed-btn ${
          personalComplete ? "active" : ""
        }`}
        disabled={!personalComplete}
        onClick={() => alert("Proceeding...")}
      >
        Proceed to Buy →
      </button>
    </div>
  );
}
