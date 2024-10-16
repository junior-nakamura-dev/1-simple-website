import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Food from "./components/Food.tsx";
import FoodModel from "./model/FoodModel.ts";

function App() {
    return <>
        <Header />
        <Food foods={[new FoodModel('Banana'), new FoodModel('Apple')]} />
        <Footer />
    </>
}

export default App
