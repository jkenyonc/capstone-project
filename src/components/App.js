import React, { Component } from 'react';
import '../styles/App.css';
import CardList from './Homepage/CardList';
import TopAppBar from './TopAppBar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';

class App extends Component {
  state = {
    currentUser: "joelchristensen"
  }
  postData = (data={}, url=``) => {
    const finalData = {...data, user: this.state.currentUser, date: new Date()}
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
    .catch(error => console.error(`Fetch Error =\n`, error))
  }  
  render() {
    return (
      <Router>
        <div className="App">
          <TopAppBar />
          <Link to="/submitpost">Submit a Post</Link>
          <Route exact path="/" component={CardList} />
          <Route path="/post/:postid" component={PostDetail}/>
          <Route path="/submitpost" render={() => (<NewPostForm onPost={this.postData}/>)} />
        </div>
      </Router>
    );
  }
}

export default App;
