import React, { useState, useEffect } from "react";
import TimeInput from "./timeimput";

function TimeControls({ onSecondsChange }) {
  const [inputValue, setInputValue] = useState("");
  const [alertValue, setAlertValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [alertTime, setAlertTime] = useState(null);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === alertTime) {
            alert("¡Tu tiempo de alarma ha sido alcanzado!");
          }
          onSecondsChange(prevSeconds + 1);
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, alertTime, onSecondsChange]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAlertChange = (event) => {
    setAlertValue(event.target.value);
  };

  const handleSetTime = () => {
    setSeconds(Number(inputValue));
  };

  const handleSetAlertTime = () => {
    setAlertTime(Number(alertValue));
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(Number(inputValue) || 0);
    setIsRunning(true);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  return (
    <TimeInput
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onSetTime={handleSetTime}
      alertValue={alertValue}
      onAlertChange={handleAlertChange}
      onSetAlertTime={handleSetAlertTime}
      onStop={handleStop}
      onReset={handleReset}
      onResume={handleResume}
    />
  );
}

export default TimeControls;