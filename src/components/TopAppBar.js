import React, { Component } from "react";
import "../styles/TopAppBar.css";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";

class TopAppBar extends Component {
  render() {
    return (
      <header className="App-header">
        <Link to="/" className="App-title"><div >Tubular</div></Link>
        <div className="container-1">
          <FontAwesome className="search-icon" name="search" />
          <input
            type="search"
            className="App-searchbar"
            placeholder={"  Search"}
          />
        </div>
        <button className="App-account App-account_signup">Sign in</button>
        <button className="App-account App-account_login">Log in</button>
      </header>
    );
  }
}

export default TopAppBar;
