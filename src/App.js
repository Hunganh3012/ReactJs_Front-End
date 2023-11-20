import "./App.css";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
import Toggle from "./components/toggle/Toggle";

function App() {
    return (
        <div>
            <Card></Card>
            {/* <Button>Primary</Button> */}
            {/* <Button secondary className="button--secondary">Secondary</Button> */}
            {/* <GameWithReducer></GameWithReducer> */}
            {/* <Game></Game> */}
            {/* <Toggle></Toggle> */}
            {/* <Counter></Counter> */}
        </div>
    );
}

export default App;
