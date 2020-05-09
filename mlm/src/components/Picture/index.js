import React from "react";
import "./style.css";

function Picture(props) {
    return (
            <img
                width="150"
                height="200"
                onClick={() => props.handleClick(props.id)}
                alt={props.alt}
                src={props.image}
            ></img>
  );
}

export default Picture;