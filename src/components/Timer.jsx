import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time <= 0) return alert("Time's up");

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <h2 style={{ marginTop: "100px" }}>Count down: {time} seconds</h2>;
}
