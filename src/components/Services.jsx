import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "mtn",
      title: "Telecel, MTN And Airtel Tigo Data Bundles",
      short: "Fast & affordable data bundles delivered instantly.",
      priceHint: "From GH₵ 5.00",
    },
    {
      id: "checkers",
      title: "WASSCE, And BECE Checkers",
      short: "WAEC checker cards — instant delivery.",
      priceHint: "GH₵ 19.50",
    },
    {
      id: "university",
      title: "University Forms",
      short: "Apply to your chosen university with ease.",
      priceHint: "Varies",
    },
    {
      id: "passport",
      title: "Passport & Certificates",
      short: "Passport renewals & business certificates support.",
      priceHint: "Varies",
    },
  ];

  // ✅ CENTRALIZED NAVIGATION LOGIC
  const handleBuy = (id) => {
    switch (id) {

      case "passport":
         navigate("/passport-services");
         break;

      case "mtn":
        navigate("/data-packages");
        break;

      case "checkers":
        navigate("/waec-checker"); // ✅ WAEC / BECE CHECKER PAGE
        break;

      case "university":
        navigate("/university-forms"); // ✅ UNIVERSITY FORMS PAGE
        break;

      

        

      default:
        alert("This service is coming soon 🚀");
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <h2 className="services-title">WHAT WE OFFER</h2>
        <p className="services-sub">
          QuickServe Ghana — simple, fast and reliable services. Pick what you
          need and tap <strong>BUY NOW</strong>.
        </p>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.id}>
              <div className="service-top">
                <div className="service-icon" aria-hidden>
                  {s.id === "mtn"
                    ? "📶"
                    : s.id === "checkers"
                    ? "📝"
                    : s.id === "university"
                    ? "🎓"
                    : "🛂"}
                </div>
                <h3 className="service-name">{s.title}</h3>
              </div>

              <p className="service-desc">{s.short}</p>

              <div className="service-meta">
                <span className="price-hint">{s.priceHint}</span>
                <button
                  className="buy-btn"
                  onClick={() => handleBuy(s.id)}
                >
                  BUY NOW
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
