import React from "react";
import player1 from "./Player1.png";
import player2 from "./Player2.png";

export default class MainGame extends React.Component {
  render() {
    return (
      <div>
        <h1>Player 1: {this.props.playerOneHealth}</h1>
        <h3>Action: {this.props.p1action}</h3>
        <img src={player1} />

        <h1>Player 2:{this.props.playerTwoHealth}</h1>
        <h3>Action: {this.props.p2action}</h3>
        <img src={player2} />

        {this.props.alive && (
          <div>
            <button
              onClick={() => {
                this.props.attack();
              }}
            >
              Attack
            </button>

            <button
              onClick={() => {
                this.props.heal();
              }}
            >
              Heal Team
            </button>
          </div>
        )}

        <h1>Dragon: {this.props.dragonHealth}</h1>
      </div>
    );
  }
}
