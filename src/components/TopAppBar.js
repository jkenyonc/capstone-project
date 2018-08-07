import React, { Component } from 'react';

class TopAppBar extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-title">Tubular</div>
        <div className="container-1">
          <i className="fas fa-search"></i>
          <input type="search" className="App-searchbar" placeholder={"  Search"}  />
        </div>
        <button className="App-account App-account_signup">Sign in</button>
        <button className="App-account App-account_login">Log in</button>
      </header>
    );
  }
}

export default TopAppBar;