import React from "react";
import "./timer.css";

export interface TimerProps {};

export interface TimerState {
    time: number;
    timeInMins: string;
    interval: NodeJS.Timeout;
};

// Timer that tracks and displays time elapsed since it was created
class Timer extends React.Component<TimerProps, TimerState> {
    constructor(props: TimerProps) {
        super(props);

        this.state = {
            time: 0,
            timeInMins: "0:00",
            interval: setInterval(() => {}, 0)
        };

        this.init = this.init.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.init();
    }

    // initialize interval for timer
    init() {
        this.setState ({ interval: setInterval(this.tick, 1000) });
    }

    // increase the time of the timer and the timer label
    tick() {
        let newSecs = this.state.time + 1;
        let mins = Math.floor(newSecs / 60);
        let secs = ('0' + (newSecs % 60)).slice(-2);
        this.setState({
            time: newSecs, 
            timeInMins: "" + mins + ":" + secs
        });
    }

    // stop the timer
    stop() {
        clearInterval(this.state.interval);
    }

    // retrieve time elapsed
    getTime() {
        return this.state.time;
    }

    render() {
        return (
            <div className="timer">
                <div className="time">{this.state.timeInMins}</div>
                <div className="timeLabel">Time Elapsed</div>
            </div>
        );
    }
}

export default Timer;
