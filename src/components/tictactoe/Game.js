import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../helper";

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) => {
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    };
    const ResetGame = () => {
        setBoard(Array(9).fill(null));
    };
    return (
        <div>
            <Board cell={board} onClick={handleClick}></Board>
            {winner && <div className="game-winner"> Winner is {winner}</div>}
            <button className="game-reset" onClick={ResetGame}>
                ResetGame
            </button>
        </div>
    );
};

export default Game;
