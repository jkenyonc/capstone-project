import React, { Component } from "react";
import "../styles/App.css";
import CardList from "./Homepage/CardList";
import TopAppBar from "./TopAppBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetail from "./PostDetail";
import NewPostForm from "./NewPostForm";

class App extends Component {
  state = {
    currentUser: "joelchristensen"
  };
  postData = (data = {}, url = ``) => {
    const finalData = {
      ...data,
      user: this.state.currentUser,
      date: new Date()
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
      .then(response => this.setState({response: response}))
      .catch(error => console.error(`Fetch Error =\n`, error));
  };
  render() {
    return (
      <Router>
        <div className="App">
          <TopAppBar />
          <Route exact path="/" component={CardList} />
          <Route
            path="/post/:postid"
            render={({match}) => <PostDetail match={match} onComment={this.postData} />}
          />
          <Route
            path="/submitpost"
            render={({match}) => <NewPostForm match={match} onPost={this.postData} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
