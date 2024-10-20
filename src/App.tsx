import UserGreetings from "./components/UserGreetings.tsx";

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

    return <>
        <UserGreetings name='Junior' isLoggedIn={true} />
    </>
}

export default App
