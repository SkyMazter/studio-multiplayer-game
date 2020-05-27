import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";
import MainGame from "./MainGame.jsx";
import Victory from "./Victory.jsx";

export default class Slayers extends GameComponent {
  constructor() {
    super();
    this.state = {
      render: null,
      playerOneHealth: 1000,
      playerTwoHealth: 1000,
      playerOneAction: null,
      playerTwoAction: null,
      dragonHealth: 2000
    };
    this.attack = this.attack.bind(this);
    var myid = this.getMyUserId();
    var creator_id = this.getSessionCreatorUserId();
    if (creator_id === myid) {
      this.getSessionDatabaseRef().set({
        playerOneHealth: 1000,
        playerTwoHealth: 1000,
        playerOneAction: "Undecided",
        playerTwoAction: "Undecided",
        dragonHealth: 2000
      });
    } else {
    }
  }
  randomNum() {
    console.log("in randomNum");
    let number = Math.random() * 100;
    number = number + 100;
    number = Math.floor(number);
    console.log(number);
    return number;
  }

  onSessionDataChanged(dataChanged) {
    var newState = {
      ...this.state,
      ...dataChanged
    };
    this.setState(newState);
    var myid = this.getMyUserId();
    var creator_id = this.getSessionCreatorUserId();
    console.log(newState);
    console.log(this.randomNum());
    if (myid === creator_id) {
      if (
        newState.playerOneAction !== "Undecided" &&
        newState.playerTwoAction !== "Undecided"
      ) {
        let playerOneDamage = this.randomNum();
        let playerTwoDamage = this.randomNum();
        let dragonDamage = this.randomNum();

        this.getSessionDatabaseRef().update({
          dragonHealth:
            newState.dragonHealth - (playerOneDamage + playerTwoDamage),
          playerOneHealth: newState.playerOneHealth - dragonDamage,
          playerTwoHealth: newState.playerTwoHealth - dragonDamage,
          playerOneAction: "Undecided",
          playerTwoAction: "Undecided"
        });
      }
    }
  }
  // onSessionMetadataChanged(player){
  //   this.setState({

  //   })
  // }
  attack() {
    var myid = this.getMyUserId();
    var creator_id = this.getSessionCreatorUserId();

    if (myid === creator_id) {
      this.getSessionDatabaseRef().update({
        playerOneAction: "attack"
      });
    } else {
      this.getSessionDatabaseRef().update({
        playerTwoAction: "attack"
      });
    }
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

    if (this.state.dragonHealth === 0) {
      return <Victory />;
    } else if (this.state.render === "characterSelect") {
      return (
        <MainGame
          playerOneHealth={this.state.playerOneHealth}
          playerTwoHealth={this.state.playerTwoHealth}
          dragonHealth={this.state.dragonHealth}
          attack={this.attack}
          p1action={this.state.playerOneAction}
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
