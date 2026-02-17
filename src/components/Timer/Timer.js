import { useState, useEffect } from 'react';
import styles from './Timer.module.scss';
import Time from "../Time/Time";
import Button from "../Button/Button";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState();

    const start = () => {
        let startTime = Date.now();

        setTimer(setInterval(() => {
            const currentTime = Date.now();
            setTime(prevValue => prevValue + currentTime - startTime);
            startTime = currentTime;
        }, 1));
    };

    const stop = () => {
        clearInterval(timer);
        setTimer(null);
    }

    const reset = () => {
        stop();
        setTime(0);
    }

    useEffect(() => {
        return () => {
            if(timer) clearInterval(timer);
        };
    }, []);

    return (
        <div className={styles.timer}>
            <Time>{ time }</Time>
            <div>
                <Button action={() => {if (timer == null) {start()}}} >Start</Button>
                <Button action={stop}>Stop</Button>
                <Button action={reset}>Reset</Button>
            </div>
        </div>
    );
}

export default Timer;