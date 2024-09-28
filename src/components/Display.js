import React from "react";
import './Display.css';

function Display ({input, result}){
    return(<div className="Display">
        <div className="input">{input}</div><div className="result">{result}</div>
    </div>);
}

export default Display;
