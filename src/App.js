import "./App.css";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
import GameWithReducer from "./components/tictactoe/GameWithReducer";
import Toggle from "./components/toggle/Toggle";

function App() {
    return (
        <div>
            <GameWithReducer></GameWithReducer>
            {/* <Game></Game> */}
            {/* <Toggle></Toggle> */}
            {/* <Counter></Counter> */}
        </div>
    );
}

export default App;
