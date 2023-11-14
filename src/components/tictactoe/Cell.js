import React from "react";

const Cell = ({value,onClick}) => {
    // object destructuring;
    console.log(value,onClick);
    return <div className="game-cell" onClick={onClick}>
        {value}
    </div>;
};

export default Cell;
