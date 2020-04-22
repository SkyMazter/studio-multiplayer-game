import GameComponent from "../../GameComponent.js";
import React from "react";
import UserApi from "../../UserApi.js";

export default class Slayers extends GameComponent {
  constructor() {
    super();
    this.state = {
      render: null
    };
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

    if (creator_id === myid) {
      host_greeting = "You are the host";
    } else {
      host_greeting = "You are not the host";
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
        <button onClick={() => {}}>Start Game</button>
      </div>
    );
  }
}
