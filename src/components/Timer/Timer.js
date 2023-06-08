import { useState } from 'react';
import styles from './Timer.module.scss';
import Time from "../Time/Time";
import Button from "../Button/Button";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState();

    const start = () => {
        setTimer(setInterval(() => {
            setTime(prevValue => prevValue + 1);
        }, 1));
    };

    const stop = () => {
        clearInterval(timer);
    }

    const reset = () => {
        stop();
        setTime(0);
    }


    return (
        <div className={styles.timer}>
            <Time>{ time }</Time>
            <div>
                <Button action={start}>Start</Button>
                <Button action={stop}>Stop</Button>
                <Button action={reset}>Reset</Button>
            </div>
        </div>
    );
}

export default Timer;