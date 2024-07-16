import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(timerRef.current);
    };

    return (
        <div>
            <h1>Timer: {time} seconds</h1>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Timer;