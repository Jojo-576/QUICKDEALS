import { useEffect, useState } from "react";
import "./BusinessStatusBar.css";

export default function BusinessStatusBar() {
  const [status, setStatus] = useState("");

  const checkBusinessStatus = () => {
    const now = new Date();
    const hour = now.getHours();

    // Open from 7:00 to 22:00
    if (hour >= 7 && hour < 22) {
      setStatus("OPEN 🟢 | Business Hours: 7:00am – 10:00pm");
    } else {
      setStatus("CLOSED 🔴 | Business Hours: 7:00am – 10:00pm");
    }
  };

  useEffect(() => {
    checkBusinessStatus();

    // update every 1 minute
    const interval = setInterval(checkBusinessStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-wrapper">
      <div className="status-marquee">
        <span>{status}</span>
        <span>{status}</span>
      </div>
    </div>
  );
}
