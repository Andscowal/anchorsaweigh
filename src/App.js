import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ship: false,
      anchor: false
    };
  }

  componentWillMount() {
    this.baseState = this.state;
  }

  showShip = () => {
    this.setState({
      ship: true,
      anchor: false
    });
  };

  anchorShip = () => {
    this.setState({
      ship: true,
      anchor: true
    });
  };

  render() {
    return (
      <div>
        <h1>Anchor down the ship!</h1>
        <div className="container">
          <div className="hide">
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className="hide">
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className="hide">
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className="hide">
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
