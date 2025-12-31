import React from "react";
import { useNavigate } from "react-router-dom";
import "./PassportServices.css";

export default function PassportServices() {
  const navigate = useNavigate();

  return (
    <div className="passport-page">
      {/* HEADER */}
      <header className="passport-header">
        <h1>Passport & Certificate Services</h1>
        <p>
          Choose the service you need. After proceeding, you will be contacted
          within a few seconds.
        </p>
      </header>

      {/* SERVICES GRID */}
      <section className="passport-grid">
        <div
          className="passport-card"
  onClick={() => navigate("/passport/application")}

          
        >
          <h3>Passport Application</h3>
          <p>Normal & Instant passport processing.</p>
        </div>

        <div
          className="passport-card"
          onClick={() => navigate("/birth-certificate")}
        >
          <h3>Birth Certificate</h3>
          <p>Normal & Instant birth certificate services.</p>
        </div>

        <div
          className="passport-card"
          onClick={() => navigate("/business-certificate")}
        >
          <h3>Business Certificate</h3>
          <p>Registrar General business registration support.</p>
        </div>
      </section>

      {/* NOTE */}
      
    </div>
  );
}
