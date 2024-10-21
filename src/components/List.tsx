import styles from './List.module.css'

export class Fruit {
    id: number;
    name: string;
    calories: number

    constructor(id: number, name: string, calories: number) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}

interface ListProps {
    items?: Fruit[];
}

// Setting default props
List.defaultProps = {
    items: [], // Default to an empty array
};

function List(props: React.PropsWithChildren<ListProps>) {
    const orderedList = (props.items || [])
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => (
            <li key={item.id} className={styles.item}>
                {item.name}: <span className={styles.calories}>{item.calories}</span> calories
            </li>
        ));

    return (
        <div className={styles.card}>
            <ul>{orderedList}</ul>
        </div>
    );
}

export default List;
