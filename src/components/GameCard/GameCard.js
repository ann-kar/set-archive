import React from "react";

import "./GameCard.scss";
import {Symbol} from "../../components";

class GameCard extends React.Component {

    state = {
        inactiveClass: true,
        activeClass: false,
        highlightClass: false
    };

    componentDidUpdate(prevProps, prevState) {

        const {active, id} = this.props;

        if (!active.length && !this.state.inactiveClass) {

            this.setState({
                inactiveClass: true,
                activeClass: false,
                highlightClass: false
            })

        } else if ((active.length === 3) && (active.find((el) => el === id)) && !this.state.highlightClass) {

            this.setState({
                highlightClass: true,
                activeClass: false,
                inactiveClass: false
            })

        } else if (active.find((el) => el === id)) {

            if (!this.state.activeClass) {

                this.setState({
                    activeClass: true,
                    inactiveClass: false
                })
            }
        } else if (active.find((el) => el !== id)) {

            if (!this.state.inactiveClass) {

                this.setState({
                    activeClass: false,
                    inactiveClass: true
                })
            }
        }
    }

    render() {

        const {id} = this.props;

        if (id) {
            return (
                <div className={`GameCard 
            ${this.state.activeClass ? "active" : false} 
            ${this.state.inactiveClass ? "inactive" : false}
            ${this.state.highlightClass ? "highlight" : false} `} id={id}
                     onClick={this.props.cardClickHandler}>
                    {Array(parseInt(id[3]) + 1)
                        .fill("x")
                        .map((el, i) => <Symbol key={i} id={id}/>)}
                </div>
            )
        } else {
            return <div/>
        }
    }
}

export default GameCard;