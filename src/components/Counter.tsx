import {useState} from "react";
import styles from "./Counter.module.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment3 = () => {
        //update function
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className={styles.counterContainer}>
            <p className={styles.counterDisplay}> {count} </p>

            <button className={styles.counterButton} onClick={increment3}>Increment +3</button>
            <button className={styles.counterButton} onClick={increment}>Increment</button>
            <button className={styles.counterButton} onClick={reset}>Reset</button>
            <button className={styles.counterButton} onClick={decrement}>Decrement</button>
        </div>
    );

}

export default Counter;
