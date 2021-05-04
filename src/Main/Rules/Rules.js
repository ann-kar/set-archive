import React from "react";

import "./Rules.scss";

function Rules() {

    return (
        <div className="Rules fade-in">
            <ol className="Rules__list">
                <li className="Rules__list__item">The deck includes 81 cards, each having 4 distinct parameters (color, shading, shape, and number of
                    elements).</li>
                <li className="Rules__list__item">Each card appears on the board only once. At the beginning of the game, there are 12 cards on
                    the board.</li>
                <li className="Rules__list__item">The goal is to find *sets* of three cards that simultaneously have:</li>
                    <ul>
                        <li className="Rules__list__item">the same colour or all different colours</li>
                        <li className="Rules__list__item">the same shape or all different shapes</li>
                        <li className="Rules__list__item">the same shading or all different shadings</li>
                        <li className="Rules__list__item">the same number of elements or all different numbers of elements.</li>
                    </ul>
                <li className="Rules__list__item">Be as fast as you can (in the original game, you need to find sets faster than your opponent).</li>
                <li className="Rules__list__item">If there are no sets on the board, you can click on the "check for sets" button to display three
                    additional cards.</li>
                <li className="Rules__list__item">When you pair the extra cards to make a set, they will not be replaced with new cards - the goal is
                    to always have a total of 12 cards on the board.</li>
                <li className="Rules__list__item">If you click on the button and it turns out that you missed a set that was already on the board, 3
                    additional seconds will be added to your final score.</li>
            </ol>
        </div>
    )
};

export default Rules;