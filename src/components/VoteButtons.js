import React, { Component } from "react";

class VoteButtons extends Component {
  handleVote = event => {
    // switch (event.target.name) {
    //   case "voteUp": {
    //     voteInt = 1;
    //     console.log("upvoted post:", this.props.post);
    //     break;
    //   }
    //   case "voteDown": {
    //     voteInt = -1;
    //     break;
    //   }
    //   default:
    //     break;
    // }
    this.props.onVote(event.target.name)
    console.log(event.target)
  }
  render() {
    return (
      <div>
        <button name="voteUp" onClick={this.handleVote}>
          Upvote
        </button>
        <button name="voteDown" onClick={this.handleVote}>
          Downvote
        </button>
        <output>{this.props.score}</output>
      </div>
    );
  }
}

export default VoteButtons;
