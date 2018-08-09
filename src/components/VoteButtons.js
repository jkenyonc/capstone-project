import React, { Component } from "react";
import "../styles/comments.css";

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
      <div className="vote-buttons">
        <button name="voteUp" className="vote_up" onClick={this.handleVote} >
          <i class="fas fa-caret-up"></i>
        </button>
        <output>{this.props.score}</output>
        <button name="voteDown" className="vote_down" onClick={this.handleVote}>
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
    );
  }
}

export default VoteButtons;
