import React, { Component } from "react";
import ContentCard from "./ContentCard";
import { Link } from "react-router-dom";
import "../../styles/CardList.css";

class CardList extends Component {
  state = {
    isLoading: true,
    error: null
  };

  handleVote = vote => {
    this.props.onVote({ ...vote, content: "post" });
  };

  render() {
    const data = this.props.data;
    return (
      <React.Fragment>
        <Link to="/submitpost">Submit a Post</Link>
        <ul className="list-container">
          {data.map((post) => (
            <ContentCard onVote={this.handleVote} post={post} key={post.id} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default CardList;
