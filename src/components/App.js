import React, { Component } from 'react';
import '../styles/App.css';
import CardList from './Homepage/CardList';
import TopAppBar from './TopAppBar';
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import PostDetail from './PostDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopAppBar />
          <CardList />
          <Route url={`/post/:postid`} component={PostDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
