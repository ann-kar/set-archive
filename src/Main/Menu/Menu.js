import React from "react";

import "./Menu.scss";
import MenuCard from "./MenuCard/MenuCard";

class Menu extends React.Component {

    render() {
        return (
            <nav className="Menu">

                {Array(9).fill("x").map((el, i) =>
                    <MenuCard id={"id" + i}
                              key={i}
                              position={this.props.position}
                    />)}

                <MenuCard position={this.props.position} id={"id10"} newGame={this.props.newGame}/>
                <MenuCard position={this.props.position} id={"id11"} results={this.props.results}/>
                <MenuCard position={this.props.position} id={"id12"} rules={this.props.rules}/>

            </nav>
        )
    }
}

export default Menu