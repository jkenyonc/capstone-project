import React, { Component } from 'react';
import ContentCard from "./ContentCard"
class CardList extends Component {
	state = {
		isLoading: true,
		posts: [],
		error: null
	}

	fetchPosts() {
    fetch(`/posts`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
	}

	componentDidMount() {
		this.fetchPosts()
	}
	
  render() {
		const { posts } = this.state;
    return (
      <div>
        {posts.map((post) => <ContentCard post={post} key={post.id}/>)}      
      </div>
    );
  }
}

export default CardList;