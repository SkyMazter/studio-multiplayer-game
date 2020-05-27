import React from "react";
import player1 from "./Player1.png";

export default class MainGame extends React.Component {
  render() {
    return (
      <div>
        <h1>Player 1: {this.props.playerOneHealth}</h1>
        <h1>Player 2:{this.props.playerTwoHealth}</h1>
        <h1>Dragon: {this.props.dragonHealth}</h1>
        <h3>Action: {this.props.p1action}</h3>
        <button
          onClick={() => {
            this.props.attack();
          }}
        >
          Attack
        </button>
        <img src={player1} />
      </div>
    );
  }
}
