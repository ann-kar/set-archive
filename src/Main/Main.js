import React from "react";

import "./Main.scss";
import {Menu, NewGame, Rules, Results} from "../Main";

class Main extends React.Component {

    state = {
        newGame: false,
        results: false,
        rules: false,
        position: true,
    };

    newGame = () => {

        this.setState(prevState => ({
            newGame: !prevState.newGame,
            rules: false,
            results: false
        }));
    };

    rules = () => {

        this.setState(prevState => ({
            rules: !prevState.rules,
            newGame: false,
            results: false
        }));
    };

    results = () => {

        this.setState(prevState => ({
            results: !prevState.results,
            newGame: false,
            rules: false
        }));
    };

    componentDidUpdate(prevProps, prevState) {

        const {newGame, results, rules} = this.state;
        const btnNames = ["newGame", "results", "rules"];

        for (let el of btnNames) {
            if (this.state[el] !== prevState[el]) {
                if (this.state[el]) {
                    this.setState({position: false})
                } else if (!rules && !newGame && !results) {
                    this.setState({position: true})
                }
            }
        }
    }

    render() {
        return (
            <div className="Main">
                {this.state.newGame && <NewGame />}
                {this.state.results && <Results />}
                {this.state.rules && <Rules />}

                <Menu
                    newGame={this.newGame}
                    results={this.results}
                    rules={this.rules}
                    position={this.state.position}/>
            </div>
        )
    }
}

export default Main;