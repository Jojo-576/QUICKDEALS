import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// ✅ IMPORT LOCAL SLIDER IMAGES
import slider1 from "../assets/slider/slider1.png"; // MTN
import slider2 from "../assets/slider/slider2.png"; // Results Checker
import slider3 from "../assets/slider/slider3.png"; // Passport / Certificates

/**
 * Responsive Slider component using Swiper
 */

const slides = [
  {
    title: "Affordable Data Bundles — Fast & Affordable",
    img: slider1, // ✅ LOCAL IMAGE
  },
  {
    title: "Results Checkers — WASSCE, BECE, NOVDEC and more",
    img: slider2, // ✅ LOCAL IMAGE
  },
  {
    title: "Passport Services & Business Certificates",
    img: slider3, // ✅ LOCAL IMAGE
  },
  {
    title: "University Forms — Apply & Succeed",
    img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function Slider() {
  return (
    <div style={{ marginTop: "5px", padding: 0 }}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        style={{
          width: "100%",
          height: "45vh", // ✅ responsive height
          minHeight: "260px",
          maxHeight: "420px",
        }}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${s.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              {/* DARK OVERLAY TEXT */}
              <div
                style={{
                  margin: "16px",
                  padding: "12px 16px",
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  maxWidth: "90%",
                }}
              >
                {s.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
