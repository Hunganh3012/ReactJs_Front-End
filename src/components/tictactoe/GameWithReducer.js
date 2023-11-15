import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../helper";

//initialState = {}
const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
};
// immutable(không thể chỉnh sửa/ thay đổi ) => tạo bản sao
// [...arr] {...obj}
// deep copy Jsoin.parse(Json.stringify(obj))

const gameReducer = (state, action) => {
    switch (action.type) {
        case "CLICK":
            const { board, xIsNext } = state;
            const { index, winner } = action.payload;
            if (winner || board[index]) return state;
            const nextState = JSON.parse(JSON.stringify(state));

            nextState.board[index] = xIsNext ? "X" : "O";
            nextState.xIsNext = !xIsNext;
            return nextState;
        case "RESET":
            const nextStates = JSON.parse(JSON.stringify(state));
            nextStates.board = Array(9).fill(null);
            nextStates.xIsNext = true;
            return nextStates;

        default:
            break;
    }
    return state;
};
const GameWithReducer = () => {
    // useReducer
    const [state, dispatch] = useReducer(gameReducer, initialState);
    // const action= {type: 'CLICK', payload:{}}
    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     xIsNext: true,
    // });
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        dispatch({
            type: "CLICK",
            payload: {
                index,
                winner,
            },
        });
    };
    const ResetGame = () => {
        dispatch({
            type: "RESET",
            payload: {},
        });

        // setState({
        //     board: Array(9).fill(null),
        // });
    };
    return (
        <div>
            <Board cell={state.board} onClick={handleClick}></Board>
            {winner && <div className="game-winner"> Winner is {winner}</div>}
            <button className="game-reset" onClick={ResetGame}>
                ResetGame
            </button>
        </div>
    );
};

export default GameWithReducer;
