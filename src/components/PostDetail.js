import React, { Component } from "react";
import Comment from "./Comment";
import TimeAgo from "timeago-react";
class PostDetail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
    this.state = {
      comments: [],
      post: {},
      newcomment: { text: "" }
    };
  }
  fetchComments() {
    fetch(`/posts/${this.props.match.params.postid}/comments`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          comments: data
        })
      );
  }
  fetchPost() {
    fetch(`/posts/${this.props.match.params.postid}`)
      .then(response => response.json())
      .then(data => this.setState({ post: data }));
  }
  componentDidMount() {
    this.fetchComments();
    this.fetchPost();
  }

  handleChange = event => {
    this.setState({newcomment:{text: event.target.value} })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComment(this.state.newcomment, `/posts/${this.props.match.params.postid}/comments`)
  }

  render() {
    const { post, comments, newcomment } = this.state;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <br />
        <i>
          submitted by {post.user} <TimeAgo datetime={post.date} />
        </i>
        <hr />

        <h3>Comments</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Write a Comment</legend>
            <textarea onChange={this.handleChange} value={newcomment.text} cols="100" rows="10" />
          </fieldset>
          <input type="submit" value="Publish Comment" />
        </form>
        <ul>
          {comments.map(comment => (
            <Comment content={comment} key={comment.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostDetail;
