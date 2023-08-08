import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/home.jsx";
import "../styles/index.css";

let numero1 = 0;
let alertValueGlobal = "";
let alertTimeGlobal = null;
let initialTimeValueGlobal = ""; // Nueva variable global
let isRunning = true;

function updateAlertValue(newValue) {
    alertValueGlobal = newValue;
}

function updateInitialTimeValue(newValue) {
    initialTimeValueGlobal = newValue;
}

function setAlertTime() {
    alertTimeGlobal = Number(alertValueGlobal);
}

function stopTimer() {
    isRunning = false;
}

function resumeTimer() {
    isRunning = true;
}

function setInitialTime(value) {
    numero1 = Number(value);
}

function resetTimer() {
    numero1 = 0;
}

function tiempo(){
    if (isRunning) {
        if (numero1 === alertTimeGlobal) {
            alert("¡Tu tiempo de alarma ha sido alcanzado!");
        }
        numero1++;
    }
    ReactDOM.render(
        <Home 
            numero1={numero1} 
            alertValue={alertValueGlobal} 
            onAlertValueChange={updateAlertValue} 
            onSetAlertTime={setAlertTime}
            onStop={stopTimer}
            onResume={resumeTimer}
            onReset={resetTimer}
            onSetInitialTime={setInitialTime}
            initialTimeValue={initialTimeValueGlobal}
            onInitialTimeValueChange={updateInitialTimeValue}
        />, 
        document.querySelector("#app")
    );
}

setInterval(tiempo, 1000);
