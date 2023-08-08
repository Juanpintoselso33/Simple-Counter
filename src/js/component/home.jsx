import React, { useState, useEffect } from 'react';
import CountdownTimer from './counter';

function Home() {
    const [seconds, setSeconds] = useState(3434); 

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div>           
            <CountdownTimer seconds={seconds} />
        </div>
    );
}

export default Home;
