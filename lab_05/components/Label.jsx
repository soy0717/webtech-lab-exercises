import React from "react";

function Label(props) {
    return <span>{props.value.toFixed(1)} °{props.unit}</span> ;
}

export default Label;