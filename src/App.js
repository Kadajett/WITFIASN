import React, { Component } from 'react';
import './App.css';
import SideNavContainer from "./side-nav/side-nav.container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>WITFIASN</h1>
          <SideNavContainer></SideNavContainer>
        </header>
      </div>
    );
  }
}

export default App;
