import React from "react";

import "./MenuCard.scss";

function MenuCard(props) {

    let menuButton, position;

    if (props.position) {
        position = "center"
    } else {
        position = "right"
    }

    const menuButtons = {
        id10: ["newGame", "new game"],
        id11: ["results", "results"],
        id12: ["rules", "rules"]
    };

    if (Object.keys(menuButtons).find(el => el === props.id)) {

        menuButton = <button
            className={`button ${position}`}
            onClick={props[menuButtons[props.id][0]]}>{menuButtons[props.id][1]}</button>

    }

    return (
        <div className={`MenuCard ${position}`} id={props.id}>
            {menuButton || "SET"}
        </div>
    )
}

export default MenuCard;