import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import MainGame from "./MainGame.jsx";

export default class Slayers extends GameComponent {
  constructor() {
    super();
    this.state = {
      render: null,
      playerOneHealth: null,
      playerTwoHealth: null,
      dragonHealth: null,
      activeTurn: null
    };
    this.attack = this.attack.bind(this);
    var myid = this.getMyUserId();
    var creator_id = this.getSessionCreatorUserId();
    if (creator_id === myid) {
      this.getSessionDatabaseRef().set({
        playerOneHealth: 1000,
        playerTwoHealth: 1000,
        dragonHealth: 4000,
        activeTurn: "player1"
      });
      // this.setState({
      //   playerHealth: 1000
      // })
    } else {
      // host_greeting = "You are not the host";
    }
  }

  onSessionDataChanged(dataChanged) {
    this.setState({
      playerOneHealth: dataChanged.playerOneHealth,
      playerTwoHealth: dataChanged.playerTwoHealth,
      dragonHealth: dataChanged.dragonHealth,
      activeTurn: dataChanged.activeTurn
    });
  }
  attack() {
    this.getSessionDatabaseRef().set({
      dragonHealth: this.state.dragonHealth - 100
    });
  }
  render() {
    var id = this.getSessionId();
    var users = this.getSessionUserIds().map(user_id => (
      <span>{UserApi.getName(user_id)} </span>
    ));
    /* <li key={user_id}>
          {" "}
          <img key={user_id} src={UserApi.getPhotoUrl(user_id)} />{" "}
          {UserApi.getName(user_id)}
        </li> */
    var creator = UserApi.getName(this.getSessionCreatorUserId());
    var creator_id = this.getSessionCreatorUserId();
    var myid = this.getMyUserId();
    var host_greeting = null;

    if (this.state.render === "characterSelect") {
      return (
        <MainGame
          playerOneHealth={this.state.playerOneHealth}
          playerTwoHealth={this.state.playerTwoHealth}
          dragonHealth={this.state.dragonHealth}
          activeTurn={this.state.activeTurn}
          attack={this.attack}
        />
      );
    }
    return (
      <div>
        {/* <p>{host_greeting}</p>
        <p>Session ID: {id}</p>
        <p>Session creator: {creator}</p>
        <p>Session users:</p>
        <ul>{users}</ul> */}
        <h1>Slayers</h1>
        <p>Player 1: {creator}</p>
        <p>Player 2: {users[1]}</p>
        <button
          onClick={() => {
            this.setState({ render: "characterSelect" });
          }}
        >
          Start Game
        </button>
      </div>
    );
  }
}
