import React from "react";

import "./SVG.scss";
function SVG () {

    return (
            <svg className="SVG" width="0" height="0">
                <defs>
                    <pattern id="pattern-red"
                             width="30" height="30"
                             patternUnits="userSpaceOnUse"
                             patternTransform="rotate(0 50 50)">
                        <rect width="15" height="30" x="0" y="0" className="red fill"></rect>
                        <rect width="15" height="30" x="15" y="0" fill="white"></rect>
                    </pattern>
                    <pattern id="pattern-green"
                             width="30" height="30"
                             patternUnits="userSpaceOnUse"
                             patternTransform="rotate(0 50 50)">
                        <rect width="15" height="30" x="0" y="0" className="green fill"></rect>
                        <rect width="15" height="30" x="15" y="0" fill="white"></rect>
                    </pattern>
                    <pattern id="pattern-violet"
                             width="30" height="30"
                             patternUnits="userSpaceOnUse"
                             patternTransform="rotate(0 50 50)">
                        <rect width="15" height="30" x="0" y="0" className="violet fill"></rect>
                        <rect width="15" height="30" x="15" y="0" fill="white"></rect>
                    </pattern>
                </defs>
            </svg>
    )
}

export default SVG;