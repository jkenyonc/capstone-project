import React, { Component } from "react";
import "../styles/App.css";
import CardList from "./Homepage/CardList";
import TopAppBar from "./TopAppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import NewPostForm from "./NewPostForm";

class App extends Component {
  state = {
    currentUser: "joelchristensen",
    posts: []
  };
  postData = (data = {}, url = ``) => {
    const { posts } = this.state;
    const finalData = {
      ...data,
      user: this.state.currentUser,
      date: new Date(),
      score: 1
    };
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(finalData)
    })
      .then(response => response.json())
      .then(response => this.setState({ posts: [...posts, response] }))
      .catch(error => console.error(`Fetch Error =\n`, error));
  };
  fetchPosts() {
    fetch(`/posts`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          posts: data
        })
      );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleVote = vote => {
    console.log(vote);
    const { posts } = this.state;
    const { type, content, post } = vote;

    let scorechange;
    switch (type) {
      case "voteUp":
        scorechange = 1;
        break;
      case "voteDown":
        scorechange = -1;
        break;
      default:
        scorechange = 0;
        break;
    }

    const newPost = { ...post, score: post.score + scorechange };
    const newPostArray = [...posts];
    this.setState({ posts: newPostArray });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <TopAppBar />
          <Route
            exact
            path="/"
            render={({ match }) => (
              <CardList data={this.state.posts} onVote={this.handleVote} />
            )}
          />
          <Route
            path="/post/:postid"
            render={({ match }) => (
              <PostDetail match={match} onComment={this.postData} />
            )}
          />
          <Route
            path="/submitpost"
            render={({ match }) => <NewPostForm onPost={this.postData} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
