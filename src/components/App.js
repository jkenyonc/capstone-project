import React, { Component } from 'react';
import '../styles/App.css';
import CardList from './Homepage/CardList';
import TopAppBar from './TopAppBar';
import {BrowserRouter as Router, Route} from "react-router-dom"
import PostDetail from './PostDetail';
import NewPostForm from './NewPostForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopAppBar />
          <Route exact path="/" component={CardList} />
          <Route path="/post/:postid" component={PostDetail}/>
          <Route path="/submitpost" component={NewPostForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
