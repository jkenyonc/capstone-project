import React, { Component } from "react";
import "../styles/App.css";
import CardList from "./Homepage/CardList";
import TopAppBar from "./TopAppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import NewPostForm from "./NewPostForm";
import firebase from "@firebase/app";
import "@firebase/firestore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "joelchristensen",
      posts: []
    }
    firebase.initializeApp({
      apiKey: "AIzaSyD7DDIPoxlG7QEu7J2j2WecqbqsHQ4Pj1M",
      authDomain: "react-reddit-clone-36353.firebaseapp.com",
      databaseURL: "https://react-reddit-clone-36353.firebaseio.com",
      projectId: "react-reddit-clone-36353",
      storageBucket: "react-reddit-clone-36353.appspot.com",
      messagingSenderId: "528254341955"
    })
    
  }
  
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
    var db = firebase.firestore()
    const postRef= db.collection("posts")
    console.log(postRef)

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
