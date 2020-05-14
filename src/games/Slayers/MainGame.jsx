import React from "react";

export default class MainGame extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.dragonHealth}</h1>
        <button
          onClick={() => {
            this.props.attack();
          }}
        >
          Attack
        </button>
      </div>
    );
  }
}
