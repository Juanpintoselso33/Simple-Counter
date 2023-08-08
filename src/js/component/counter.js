import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState(0); // Iniciar desde 0

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1); // Incrementar el tiempo
    }, 1000);
    return () => clearTimeout(timer);
  }, [time]);

  const timeString = String(time).padStart(6, "0");

  return (
    <div className="d-flex bg-dark text-white p-3 justify-content-center">
      <div
        className="bg-secondary rounded p-2 mr-2 mx-3 d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        <i className="fa-regular fa-clock" style={{ color: "#ffffff" }}></i>
      </div>
      {timeString.split("").map((digit, index) => (
        <div
          key={index}
          className="bg-secondary rounded p-2 mr-2 mx-3 d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;
