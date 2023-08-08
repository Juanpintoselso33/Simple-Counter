import React from 'react';

function TimeInput({ inputValue, onInputChange, onSetTime, onSetAlertTime, alertValue, onAlertChange, onStop, onReset, onResume }) {
  return (
    <div className="mb-3 d-flex flex-column justify-content-center align-items-center mt-4">
      <div className="d-flex mb-2">
        <input
          type="number"
          value={inputValue}
          onChange={onInputChange}
          className="form-control text-center mr-2"
          placeholder="Tiempo inicial"
        />
        <button onClick={onSetTime} className="btn btn-dark fw-bolder mx-2">
          Establecer tiempo
        </button>
      </div>
      <div className="d-flex mb-2">
        <input
          type="number"
          value={alertValue}
          onChange={onAlertChange}
          className="form-control text-center mr-2"
          placeholder="Tiempo de alarma"
        />
        <button onClick={onSetAlertTime} className="btn btn-dark fw-bolder mx-2">
          Establecer alarma
        </button>
      </div>
      <div className="d-flex mt-2">
        <button onClick={onStop} className="btn btn-dark fw-bolder mx-2">
            <i className="fa-solid fa-stop" style={{color: "#ffffff"}}></i>
        </button>
        <button onClick={onReset} className="btn btn-dark fw-bolder mx-2">
            <i className="fa-solid fa-arrows-rotate" style={{color: "#ffffff"}}></i>
        </button>
        <button onClick={onResume} className="btn btn-dark fw-bolder mx-2">
          <i className="fa-solid fa-play" style={{color: "#ffffff"}}></i>
        </button>
      </div>
    </div>
  );
}

export default TimeInput;
