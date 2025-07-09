import React, { useState, useEffect } from "react";

export default function ClockHook() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  const hour12 = hours % 12 || 12;

  return (
    <div>
      <h2>Current Time</h2>
      <span
        style={{
          backgroundColor: "#00008B",
          padding: "12px",
          borderRadius: "10px",
        }}
      >
        {hour12}:{minutes}:{seconds} {period}
      </span>
    </div>
  );
}
