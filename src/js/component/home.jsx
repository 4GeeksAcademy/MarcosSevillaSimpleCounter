import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

function Home() {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(true); // Controla si el contador está activo
  const [countdownTime, setCountdownTime] = useState(null); // Tiempo objetivo para cuenta regresiva

  useEffect(() => {
    if (!isCounting) return; // Detener el contador si está pausado

    const interval = setInterval(() => {
      if (countdownTime !== null) {
        setCountdownTime((prev) => {
          if (prev <= 0) {
            clearInterval(interval); // Detener el intervalo si llega a cero
            alert("¡La cuenta regresiva ha terminado!");
            return null; // Resetea la cuenta regresiva
          }
          return prev - 1; // Decrementar el tiempo de cuenta regresiva
        });
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1); // Incrementar segundos normales
      }
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo
  }, [isCounting, countdownTime]);

  // Detectar si quedan exactamente 10 segundos
  useEffect(() => {
    if (countdownTime !== null && countdownTime === 10) {
      alert("¡Quedan 10 segundos para alcanzar el tiempo de cuenta regresiva!");
    }
  }, [countdownTime]);

  // Controladores para los botones
  const handleStop = () => setIsCounting(false); // Pausar el contador
  const handleStart = () => setIsCounting(true); // Reanudar el contador
  const handleReset = () => {
    setSeconds(0);
    setIsCounting(false); // Reiniciar y pausar
    setCountdownTime(null); // Limpiar el tiempo de cuenta regresiva
  };

  const handleSetCountdown = () => {
    setCountdownTime(15); // Configurar cuenta regresiva a 30 segundos
    setIsCounting(true); // Asegurar que el contador esté activo
  };

  return (
    <div className="container text-center my-4">
      <h1>Contador de Segundos</h1>
      <SecondsCounter seconds={countdownTime !== null ? countdownTime : seconds} />
      <div className="my-3">
        <button className="btn btn-danger mx-2" onClick={handleStop}>
          Detener
        </button>
        <button className="btn btn-success mx-2" onClick={handleStart}>
          Reanudar
        </button>
        <button className="btn btn-primary mx-2" onClick={handleReset}>
          Reiniciar
        </button>
        <button className="btn btn-warning mx-2" onClick={handleSetCountdown}>
          Iniciar Cuenta Regresiva
        </button>
      </div>
    </div>
  );
}

export default Home;


