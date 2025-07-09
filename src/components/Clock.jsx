import React from "react";
import useClock from "../hook/useClock";

function Clock() {
  const time = useClock();
  const hours = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";

  const hour12 = hours % 12 || 12;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <h2>Current Time</h2>
      <span
        style={{
          backgroundColor: "#00008B",
          padding: "12px 24px",
          borderRadius: "10px",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        {hour12}:{minutes}:{seconds} {period}
      </span>
    </div>
  );
}

export default Clock;
