import React, { useState } from "react";
import CountdownTimer from "./counter";
import TimeControls from "./timecontrols";

function Home() {
  const [seconds, setSeconds] = useState(0);

  return (
    <div className="flex-column align-items-center">
      <div className="row">
        <CountdownTimer seconds={seconds} />
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <TimeControls onSecondsChange={setSeconds} />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Home;
