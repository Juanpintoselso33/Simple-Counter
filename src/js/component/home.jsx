import React from "react";
import CountdownTimer from "./counter";
import TimeControls from "./timecontrols";

function Home({ numero1, alertValue, onAlertValueChange, onSetAlertTime, onStop, onResume, onReset, onSetInitialTime, initialTimeValue, onInitialTimeValueChange }) {
    function handleAlertChange(event) {
        onAlertValueChange(event.target.value);
    }

    return (
        <div className="flex-column align-items-center">
            <div className="row">
                <CountdownTimer seconds={numero1} />
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <TimeControls 
                        alertValue={alertValue}
                        onAlertChange={handleAlertChange}
                        onSetAlertTime={onSetAlertTime}
                        onStop={onStop}
                        onResume={onResume}
                        onReset={onReset}
                        onSetInitialTime={onSetInitialTime}
                        inputValue={initialTimeValue}
                        onInputChange={onInitialTimeValueChange}
                    />
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}

export default Home;
