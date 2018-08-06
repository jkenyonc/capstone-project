import React, { Component } from 'react';
import {Link} from "react-router-dom"

class ContentCard extends Component {
  render() {
    const post = this.props.post
    return (
      <div className="content-card">
        <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
        <div>by: {post.author}</div>
        <p>{post.content}</p>
      </div>
    );
  }
}
export default ContentCard;