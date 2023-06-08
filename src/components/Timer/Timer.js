import styles from './Timer.module.scss';

const Timer = props => {
    return (<div className={styles.timer}>{props.children}</div>);
}

export default Timer;