import styles from './Time.module.scss';

const Time = props => {
    const formatTime = millseconds => {
        return new Date(millseconds).toISOString().slice(11, 23);
    }

    return (
        <span className={styles.time}>{ formatTime(props.children) }</span>
    );
}

export default Time;