import React, {Component} from 'react';
import Comment from './Comment';

class PostDetail extends Component {
  state= {
    comments: [],
    post: {},
  }
  fetchComments() {
    fetch(`/posts/${this.props.match.params.postid}/comments`)
      .then(response => response.json())
      .then(data => 
        this.setState({
          comments: data
        })
      )
  }
  fetchPost() {
    fetch(`/posts/${this.props.match.params.postid}`)
      .then(response => response.json())
      .then(data => this.setState( {post: data} ))
  }
  componentDidMount() {
    this.fetchComments()
    this.fetchPost()
  }

  render() {
    const {post, comments} = this.state
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        {/* <hr />
        <h3>Comments</h3> */}
        <ul>{comments.map((comment) => (<Comment content={comment} key={comment.id}/>))}</ul>
      </div>
  );
}
};

export default PostDetail;