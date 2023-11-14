import React, { useState } from "react";
import "./ToogleStyle.css";
// stateLess functional component: component nhưng không sử dụng state
// function Toggle() {
//     return <div className="Toggle"></div>;
// }

// //stateFull functional component: component có sử dụng state
// function Toggle2() {
//     //const [count, setcount] = useState();
//     return <div className="Toggle"></div>;
// }

function Toggle() {
    //1. enabling state: useState(initiablize value)
    //initializ value: boolean, string, number, undefined,null
    //2. initiablize state: useState(false)
    //3. reading state:
    //4. update state:
    // const array = useState(false);
    //console.log(array); // [false, function]
    const [on, setOn] = useState(false);
    // console.log(on, setOn);
    // state-Change : re-render
    console.log(on);
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`}>
                <div className={` spinner ${on ? "active" : ""}`} onClick={() => setOn(!on)}></div>
            </div>
            {/* <div className="toogle-control">
                <div className="toogle-on" onClick={() => setOn(true)}>
                    On
                </div>
                <div className="toogle-off" onClick={() => setOn(false)}>
                    Off
                </div>
            </div> */}
        </div>
    );
}
export default Toggle;
