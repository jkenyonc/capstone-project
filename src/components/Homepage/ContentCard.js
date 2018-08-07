import React, { Component } from 'react';
import {Link, Route} from "react-router-dom"
import PostDetail from '../PostDetail';

class ContentCard extends Component {
  render() {
    const {post} = this.props
    return (
      <li className="content-card">
        <Link to={`/post/${post.id}`}><h3>{post.title}</h3></Link>
        <div>by: {post.user}</div>
        <p>{post.body}</p>
        <Route path={`/post/:postid`} component={PostDetail}/>
      </li>
    );
  }
}
export default ContentCard;