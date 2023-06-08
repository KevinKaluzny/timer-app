import styles from './Timer.module.scss';
import Time from "../Time/Time";
import Button from "../Button/Button";

const Timer = props => {
    return (
        <div className={styles.timer}>
            <Time />
            <div>
                <Button>Start</Button>
                <Button>Stop</Button>
                <Button>Reset</Button>
            </div>
        </div>
    );
}

export default Timer;