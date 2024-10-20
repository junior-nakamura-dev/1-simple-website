import styles from './UserGreetings.module.css';

interface UserGreetings {
    name: string;
    isLoggedIn: boolean;
}

function UserGreetings(props: React.PropsWithChildren<UserGreetings>) {
    const welcomeElement = <h2 className={styles.welcome}> Welcome { props.name } </h2>
    const promptLogin = <h2 className={styles.login}> User {props.name} is not logged in</h2>
    return (props.isLoggedIn ? welcomeElement : promptLogin);
}

export default UserGreetings;
