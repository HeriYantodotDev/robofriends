import React from "react";

const InputBox = ({clickGenerate}) => {
    return (
            <div className="pa2">
                <span>Please input how many Robots you want to see?</span>
                <input id = "numRobot" className="pa1 b--dashed br4 w-10 tc" type="number" min="0" max="200" placeholder="0" ></input>
                <a className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib hot-pink" href="#0" onClick={clickGenerate}>Generate Robot</a>
            </div>
    );
}

export default InputBox;