import styles from "./style.css";
import React from "react";
import player1 from "./Player1.png";
import player2 from "./Player2.png";

export default class MainGame extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "0",
          backgroundImage:
            "url('https://i.ytimg.com/vi/kxqJuc1HHbg/maxresdefault.jpg') ",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
          flexDirection: "column"
        }}
      >
        <div className={"mainDisplay"}>
          <div className={"playerOne"}>
            <h1>Player 1 Hp: {this.props.playerOneHealth}</h1>
            <h3>Action: {this.props.p1action}</h3>
            <img src={player1} />
          </div>

          <div className={"dragon"}>
            <h1>Dragon Hp: {this.props.dragonHealth}</h1>
            <img
              src={
                "https://lh3.googleusercontent.com/proxy/EF_hc6XwYiBkDZipasZHljMV9VPEWGhinqkmu784buD_WCWCporLwaMl6cGxUuxF7A6q_4TQMAfPD4G_pW5AvN6_MGx4z82GYvo"
              }
            />
          </div>

          <div className={"playerTwo"}>
            <h1>Player 2 Hp:{this.props.playerTwoHealth}</h1>
            <h3>Action: {this.props.p2action}</h3>
            <img src={player2} />
          </div>
        </div>

        {this.props.alive && (
          <div className={"interactions"}>
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
      </div>
    );
  }
}
