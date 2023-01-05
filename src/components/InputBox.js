import React from "react";
import Select from "react-select";

const options = [
    { value: '', label: 'Robo-Weirdos' },
    { value: '?set=set2', label: 'Robo-Monsters' },
    { value: '?set=set3', label: 'Robo-Smiles' },
    { value: '?set=set4', label: 'Robo-Kittens' },
  ]

const InputBox = ({clickGenerate, typeChange}) => {
    return (
            <div className="pa2 flex justify-center items-center ">
                <span className="pa2">Number of Robots(Max 80)? </span>
                <input id = "numRobot" className="pa2 b--dashed br4 w-10 tc" type="number" min="0" max="80" placeholder="0" ></input>
                <Select 
                    className="pa2 w-15" options={options} placeholder="Select Robo Type"
                    onChange={(choice) => typeChange(choice)}
                />
                <a className="pa2 tc f6 link dim br-pill ba bw1 ph3 pv2 dib hot-pink" href="#0" onClick={clickGenerate}>Generate Robot</a>
            </div>
    );
}

export default InputBox;