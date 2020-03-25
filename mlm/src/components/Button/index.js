import React from "react";
import "../../assets/css/style.css";


function Button(props) {
    return (
        <div>
            <button onClick={props.click} className="drawing-bttn">
                {props.text}
            </button>
        </div>
    )
}

export default Button