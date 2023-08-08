import React from 'react';

function CountdownTimer(props) {
    const timeString = String(props.seconds).padStart(6, '0');

    return (
      <div className="d-flex bg-dark text-white p-3 justify-content-center">
        <div className="bg-secondary rounded p-2 mr-2 mx-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
          <i className="fa-regular fa-clock" style={{color: "#ffffff"}}></i>
        </div>
        {timeString.split('').map((digit, index) => (
          <div key={index} className="bg-secondary rounded p-2 mr-2 mx-3 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
            {digit}
          </div>
        ))}
      </div>
    );
}

export default CountdownTimer;
