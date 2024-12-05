import React from "react";

function SecondsCounter({ seconds }) {
  // Función para formatear los números en 6 dígitos
  const formatTime = (time) => {
    return time.toString().padStart(6, "0").split("");
  };

  const digits = formatTime(seconds);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3 rounded">
        <div className="px-2">
          <i className="fa fa-clock fa-2x"></i>
        </div>
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
    </div>
  );
}

export default SecondsCounter;


