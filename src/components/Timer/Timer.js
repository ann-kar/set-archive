import React from "react";

import "./Timer.scss";

class Timer extends React.Component {

    state = {
        minutes: 0,
        seconds: 0,
        centiseconds: 0,
        message: false,
        isOn: true
    };

    componentDidMount() {

        this.timerID = setInterval(() =>
            this.setState({centiseconds: this.state.centiseconds + 1}, this.addSecsAndMins), 10);
    }

    componentDidUpdate(prevProps) {

        if (this.props.win) { this.stopTimer() }

        if ((prevProps.extraSecs !== this.props.extraSecs) && this.state.isOn) {

            this.setState({
                seconds: this.state.seconds + 3,
                message: true
            }, () => this.hideMessage());
        }
    }

    stopTimer = () => {

        clearInterval(this.timerID);
        if (this.state.isOn) {this.setState({isOn: false})}

    };

    addSecsAndMins = () => {

        if (this.state.centiseconds >= 99) {
            this.setState({
                centiseconds: 0,
                seconds: this.state.seconds + 1,
            })
        }

        if (this.state.seconds >= 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1,
            })
        }
    };

    hideMessage = () => {

        this.messageTimeout = setTimeout(() => this.setState({message: false}), 500)

    };


    componentWillUnmount() {

        clearInterval(this.timerID);
        clearInterval(this.messageTimeout);

    }

    render() {

        return (
            <>
                <div className="Timer" onClick={this.stopTimer}>
                    <div className="Timer__display">
                        {`${this.state.minutes.toString().padStart(2, "0")} : 
                          ${this.state.seconds.toString().padStart(2, "0")} : 
                          ${this.state.centiseconds.toString().padStart(2, "0")}`}
                    </div>
                </div>
                {this.state.message ? <div className="Timer__message"> + 3 seconds</div> : null}
            </>
        )
    }
}

export default Timer;