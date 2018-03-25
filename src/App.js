import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ship: "false",
      anchor: "false"
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(
      function() {
        this.setState({ ship: "true" });
      }.bind(this),
      3000
    );
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  showShip = () => {
    this.setState({
      ship: "true",
      anchor: "false"
    });
  };

  anchorShip = () => {
    this.setState({
      ship: this.state.ship == "true" ? "false" : "true",
      anchor: this.state.anchor == "true" ? "false" : "true"
    });
  };

  render() {
    return (
      <div>
        <h1>Anchor down the ship!</h1>
        <div className="container">
          <div className={this.state.ship}>
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className={this.state.ship}>
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className={this.state.ship}>
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
          <div className={this.state.ship}>
            <button onClick={this.anchorShip}>{"\u2693"}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
