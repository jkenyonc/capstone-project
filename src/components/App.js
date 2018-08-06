import React, { Component } from 'react';
import '../styles/App.css';
import CardList from './Homepage/CardList';
import TopAppBar from './TopAppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopAppBar />
        <CardList />
      </div>
    );
  }
}

export default App;
