import React, { useState, useEffect } from "react";
import CountdownTimer from "./counter";
import TimeInput from "./timeimput";

function Home() {
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
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, alertTime]);

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
    <div className="flex-column align-items-center">
      <div className="row">
        <CountdownTimer seconds={seconds} />
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
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
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Home;
