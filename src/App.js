import Navbar from "./components/Layout/Navbar/Navbar";
import Summary from "./components/Layout/Summary/Summary";
import MealList from "./components/Meals/MealList/MealList";

function App() {
    return (
        <>
            <Navbar />
            <Summary />
            <MealList />
        </>
    );
}

export default App;
