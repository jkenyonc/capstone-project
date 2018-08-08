import React, { Component } from "react";
import "../styles/NewPostForm.css"
class NewPostForm extends Component {
  state = {
    post: {
      title: "",
      link: "",
			images: []
    }
  };
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newPost = { ...this.state.post };
    newPost[name] = value;
    this.setState({ post: newPost });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onPost(this.state.post, "posts");
  };
  render() {
    return (
      <div className="NewPostForm">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
						<legend className="titleAndLink">Title</legend>
            <label htmlFor="post-title">Give your post an engaging title</label>
            <input
              type="text"
              name="title"
              id="post-title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset>
            <legend className="titleAndLink">Link</legend>
            <label htmlFor="post-link">Add a link to your post.</label>
            <input
              required
							type="url"
              name="link"
              id="post-link"
              value={this.state.post.link}
              onChange={this.handleChange}
            />
          </fieldset>
          <input type="submit" value="Submit Post" className="submit"/>
        </form>
      </div>
    );
  }
}

export default NewPostForm;
