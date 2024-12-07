import React from "react";

export const SecondsCounter = ({ seconds }) => {
  const formatTime = (time) => {
    return time.toString().padStart(6, "0").split("");
  };

  const digits = formatTime(seconds);

  return (
    <div className="d-flex align-items-center">
      {/* Ícono del reloj */}
      <div className="px-3">
        <i className="fa fa-clock" style={{ fontSize: "3rem" }}></i>
      </div>

      {/* Números del contador */}
      {digits.map((digit, index) => (
        <div
          key={index}
          className="mx-1 bg-secondary text-white rounded p-2"
          style={{
            fontSize: "2rem",
            width: "40px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
};





