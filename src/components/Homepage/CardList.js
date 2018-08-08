import React, { Component } from 'react';
import ContentCard from "./ContentCard"
import {Link} from 'react-router-dom' 
import "../../styles/CardList.css"

class CardList extends Component {
	state = {
		isLoading: true,
		posts: [],
		error: null
	}

	fetchPosts() {
    fetch(`/posts`)
      .then(response => response.json())
      .then(data => (
        this.setState({
          posts: data,
          isLoading: false,
        })
      ))
      .catch(error => this.setState({ error, isLoading: false }))
	}

	componentDidMount() {
		this.fetchPosts()
	}
	
  render() {
		const { posts } = this.state;
    return (
      <React.Fragment>
        <Link to="/submitpost">Submit a Post</Link>
        <ul className="list-container">
          {posts.map((post) => <ContentCard post={post} key={post.id}/>)}
        </ul>      
      </React.Fragment>
    );
  }
}

export default CardList;