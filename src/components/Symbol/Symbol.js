import React from "react";

import "./Symbol.scss";

class Symbol extends React.Component {

    state = {
        classes: ""
    };

    setClasses = () => {

        const colors = ['green', 'red', 'violet'];
        const shapes = ['diamond', 'squiggle', 'stadium'];
        const fills = ['blank', 'full', 'gradient'];
        const classes = colors[this.props.id[0]] + " " + shapes[this.props.id[1]] + " " + fills[this.props.id[2]];

        this.setState({
            classes: classes
        });
    };

    componentDidMount() {

        this.setClasses()

    }

    componentDidUpdate(prevProps) {

        if (this.props.id !== prevProps.id) {
            this.setClasses();
        }
    }

    render() {
        return (
            <svg
                className="Symbol"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 640"
                data-id={this.props.id}>
                <path className={this.state.classes} data-id={this.props.id}/>
            </svg>
        );
    }
}

export default Symbol;