import React, { Component, useState } from "react";
import "./index.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: this.props.initial,
      toggleTimer: true
    }
  }

  componentDidMount() {
      setInterval(() => this.reduceCounter(), 1000)
    
  }

  reduceCounter() {
    if (this.state.toggleTimer === true && this.state.initial !== 0){
      let seconds = this.state.initial - 1;
      this.setState({initial: seconds});
    }    
  }


  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">{this.state.initial}</div>
        <button className="large" data-testid="stop-button" onClick={() => this.setState({ toggleTimer: !this.state.toggleTimer })}>{this.state.toggleTimer ? "Stop Timer" : "Start timer"}</button>
      </div>
    );
  }
}

