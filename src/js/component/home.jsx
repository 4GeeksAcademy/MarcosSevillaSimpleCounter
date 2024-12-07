import React, { useState, useEffect } from "react";
import { SecondsCounter } from "./SecondsCounter";

export const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(false); // Empieza en pausa
  const [countdownTime, setCountdownTime] = useState(null);

  useEffect(() => {
    if (!isCounting) return;

    const interval = setInterval(() => {
      if (countdownTime !== null) {
        setCountdownTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            alert("¡La cuenta regresiva ha terminado!");
            return null;
          }
          return prev - 1;
        });
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting, countdownTime]);

  useEffect(() => {
    if (countdownTime !== null && countdownTime === 10) {
      alert("¡Quedan 10 segundos para alcanzar el tiempo de cuenta regresiva!");
    }
  }, [countdownTime]);

  const handleStop = () => setIsCounting(false); // Detener el contador
  const handleStart = () => setIsCounting(true); // Iniciar o reanudar el contador
  const handleReset = () => {
    setSeconds(0);
    setIsCounting(false); // Reiniciar y pausar
    setCountdownTime(null); // Limpiar el tiempo de cuenta regresiva
  };

  const handleSetCountdown = () => {
    setCountdownTime(15); // Configurar cuenta regresiva a 15 segundos
    setIsCounting(true); // Asegurar que el contador esté activo
  };

  return (
    <div className="container text-center my-4">
      <h1>Contador de Segundos</h1>
      <div className="d-flex align-items-center justify-content-between bg-dark text-white p-3 rounded">
        {/* Contador alineado a la izquierda */}
        <div>
          <SecondsCounter seconds={countdownTime !== null ? countdownTime : seconds} />
        </div>

        {/* Botones alineados horizontalmente a la derecha */}
        <div className="d-flex">
          <button className="btn btn-success mx-2" onClick={handleStart}>
            Iniciar
          </button>
          <button className="btn btn-danger mx-2" onClick={handleStop}>
            Detener
          </button>
          <button className="btn btn-primary mx-2" onClick={handleReset}>
            Reiniciar
          </button>
          <button className="btn btn-warning mx-2" onClick={handleSetCountdown}>
            Iniciar Cuenta Regresiva
          </button>
        </div>
      </div>
    </div>
  );
};





