import React, { Component } from "react";
import TimeAgo from "timeago-react";
import VoteButtons from "./VoteButtons";

class Comment extends Component {
  render() {
    const { user, text, date } = this.props.content;
    return (
      <li style={tempCommentStyle}>
        <VoteButtons onVote={() => console.log("voted on comment (WIP)")}/>
        <p>{text}</p>
        <i>submitted by {user} <TimeAgo datetime={date} /></i>
      </li>
    );
  }
}
export default Comment;

const tempCommentStyle = {
  margin: "5px",
  padding: "5px",
  border: "1px solid black"
};
