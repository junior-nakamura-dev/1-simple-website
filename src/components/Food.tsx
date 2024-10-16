import FoodModel from "../model/FoodModel.ts";

interface FoodComponentProps {
    foods: FoodModel[];
}

function Food(props: React.PropsWithChildren<FoodComponentProps>) {

    const { foods } = props;

    return (
        <ul>
            {foods.map((item) => (FoodItem(item)))}

        </ul>
    );
}

function FoodItem(foodModel: FoodModel) {
    return (
        <li>{foodModel.name}</li>
    )
}

export default Food;
