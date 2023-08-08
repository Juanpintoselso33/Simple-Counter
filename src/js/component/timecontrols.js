import React from "react";
import TimeInput from "./timeimput";

function TimeControls({ alertValue, onAlertChange, onSetAlertTime, onStop, onResume, onReset, onSetInitialTime, inputValue, onInputChange }) {
  return (
    <TimeInput
      alertValue={alertValue}
      onAlertChange={onAlertChange}
      onSetAlertTime={onSetAlertTime}
      onStop={onStop}
      onResume={onResume}
      onReset={onReset}
      onSetInitialTime={onSetInitialTime}
      inputValue={inputValue}
      onInputChange={onInputChange}
    />
  );
}

export default TimeControls;
