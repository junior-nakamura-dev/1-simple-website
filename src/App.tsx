import List, {Fruit} from "./components/List.tsx";

function App() {
    // return <>
    //     <Header />
    //     <Food foods={[new FoodModel('Banana'), new FoodModel('Apple')]} />
    //     <Footer />
    // </>

    // return <>
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Card />
    //     <Button />
    //     <Student student={new StudentModel( 30, true, 'Junior')} />
    //     <Student student={new StudentModel( 35, false)} />
    // </>

    // return <>
    //     <UserGreetings name='Junior' isLoggedIn={true} />
    // </>

    const fruits1 = [new Fruit(1, 'apple', 150), new Fruit(2, 'banana', 200)];
    const fruits2 = [new Fruit(3, 'pineapple', 150), new Fruit(4, 'cocoa', 200)];

    return <div className="cardContainer">
        <List  />
        {fruits1.length > 0 && <List items={fruits1} />}
        {fruits2.length > 0 && <List items={fruits2} />}
    </div>
}

export default App
