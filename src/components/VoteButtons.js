import React, { Component } from "react";

class VoteButtons extends Component {
  render() {
    return (
      <button>Upvote</button>
      <output>{this.props.score}</output>
    );
  }
}

export default VoteButtons;
