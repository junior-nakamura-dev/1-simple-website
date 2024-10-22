import styles from './Button.module.css'

function Button() {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // You can access the event properties here
        console.log('Button clicked!', event);
        window.alert('Button clicked!')
    };
    return (
        <button className={styles.button} onClick={(evt) => handleClick(evt)}> Click me! </button>
    );
}

export default Button;
