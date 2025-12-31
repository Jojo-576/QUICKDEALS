import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataPackages.css";

// Import your logo images
import telecelLogo from "../assets/networks/telecel.png";
import mtnLogo from "../assets/networks/mtn.png";
import airtelLogo from "../assets/networks/airteltigo.png";
import afaLogo from "../assets/networks/afa.png";

export default function DataPackages() {
  const navigate = useNavigate();

  const networks = [
    { id: "telecel", name: "Telecel", img: telecelLogo },
    { id: "mtn", name: "MTN", img: mtnLogo },
    { id: "airteltigo", name: "AirtelTigo", img: airtelLogo },
    { id: "mtn-afa", name: "MTN AFA", img: afaLogo },
  ];

  return (
    <div className="data-packages-page">
      <section className="package-section">
        <div className="package-inner">
          <h2 className="package-title">CHOOSE YOUR PACKAGE</h2>
          <p className="package-sub">
            Select your network below to view and buy data bundles instantly.
          </p>

          <div className="package-grid">
            {networks.map((net) => (
              <article
                key={net.id}
                className="package-card"
                onClick={() => navigate(`/packages/${net.id}`)}
              >
                <div className="package-image-wrap">
                  <img src={net.img} alt={net.name} className="package-image" />
                </div>
                <h3 className="package-name">{net.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
