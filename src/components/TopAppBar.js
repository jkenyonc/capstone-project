import React, { Component } from 'react';
import "../styles/TopAppBar.css";

class TopAppBar extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-title">Tubular</div>
        <input type="text" className="App-searchbar" placeholder={"🔎 search"}  />
        <button className="App-account">Sign in</button>
        <button className="App-account">Log in</button>
      </header>
    );
  }
}

export default TopAppBar;