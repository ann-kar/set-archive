import React from "react";

import "./CheckButton.scss";

const CheckButton = (props) => {

    return (
        <button className="CheckButton" onClick={props.checkButton}>
            check for sets
        </button>
    )
};

export default CheckButton;