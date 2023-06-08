import styles from './Button.module.scss';

const Button = () => {
    return (
        <button>{ props.children }</button>
    );
}

export default Button;