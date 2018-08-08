import React, { Component } from 'react';
import "../styles/NewPostForm.css";
class NewPostForm extends Component {
	state = {
		post: {
			title:"",
			link: "",
		}
	}
	handleChange = (event) => {
		const name = event.target.name
		const value = event.target.value
		const newPost = {...this.state.post}
		newPost[name]= value;
		this.setState({post: newPost})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onPost(this.state.post, "posts")
	}
	render() {
		return (
			<div className="NewPost">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="post-title">Title: </label>
					<input type="text" name="title" id="post-title" value={this.state.title} onChange={this.handleChange} /> <br />
					<label htmlFor="post-link">Submit a Link: </label>
					<input required type="url" name="link" id="post-link" value={this.state.link} onChange={this.handleChange}/> <br />
					<input type="submit" value="Submit Post"/>
				</form>
			</div>
		);
	}
}

export default NewPostForm;