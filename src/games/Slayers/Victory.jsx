import React from "react";
import styles from "./style.css";

export default class Victory extends React.Component {
  render() {
    return (
      <div className={"mainDisplay"}>
        <h1>{this.props.outcome}</h1>
        <h2>
          Please close this room and make another if you wish to play again
        </h2>
        <button
          onClick={() => {
            this.props.renderState();
          }}
        >
          return to menu
        </button>
      </div>
    );
  }
}
