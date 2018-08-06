import React, { Component } from 'react';

class ContentCard extends Component {
  render() {
    const post = this.props.post
    console.log(post)
    return (
      <div className="content-card">
        <h3>{post.title}</h3>
        <div>by: {post.author}</div>
        <p>{post.content}</p>
      </div>
    );
  }
}
export default ContentCard;