import React from "react";
import "./style.css";

function Picture(props) {
    return (
            <img
                width="150"
                height="200"
                alt={props.alt}
                src={props.image}
            ></img>
  );
}

export default Picture;