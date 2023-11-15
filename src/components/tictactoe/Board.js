import React from "react";
import Cell from "./Cell";

const Board = (props) => {
    return (
        <div className="game-board">
            {props.cell.map((item, index) => (
                <Cell
                    key={index}
                    value={item}
                    className={
                        item === "X" ? "is-x" : item === "O" ? "is-o" : ""
                    }
                    onClick={() => props.onClick(index)}
                ></Cell>
            ))}
        </div>
    );
};

export default Board;
