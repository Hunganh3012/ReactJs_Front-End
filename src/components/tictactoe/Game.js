import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../helper";

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);

    const [state, setState] = useState({
        board: Array(9).fill(null),
        xIsNext: true,
    });
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const boardCopy = [...state.board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = state.xIsNext ? "X" : "O";
        setState({
            board: boardCopy,
            xIsNext: !state.xIsNext,
        });
    };
    const ResetGame = () => {
        setState({
            board: Array(9).fill(null),
        });
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

export default Game;
