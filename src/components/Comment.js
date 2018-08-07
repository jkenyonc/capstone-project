import React, { Component } from 'react';

class Comment extends Component {
	render() {
		console.log(this.props.content)
		const {name, body, email} = this.props.content
		return (
			<li style={tempCommentStyle}>
				<b>{name}</b>
				<div>{body}</div>
				<i>by {email}</i>
			</li>
		);
	}
}
export default Comment;

const tempCommentStyle = {
	margin: '5px',
	padding: '5px',
	border: '1px solid black'
}