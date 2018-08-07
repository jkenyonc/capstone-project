import React, { Component } from 'react';
import {Link, Route} from "react-router-dom"
import PostDetail from '../PostDetail';
import PostActions from '../PostActions';

class ContentCard extends Component {
  render() {
    const {post} = this.props
    return (
      <li className="content-card">
        <Link to={`/post/${post.id}`} className="post-title">{post.title}</Link>
        <div className="post-author">by: {post.user}</div>
        <p className="post-content" >{post.link}</p>
        <PostActions />
        <Route path={`/post/:postid`} component={PostDetail}/>
      </li>
    );
  }
}
export default ContentCard;