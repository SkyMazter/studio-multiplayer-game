import React from "react";

export default class Victory extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.outcome}</h1>
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
