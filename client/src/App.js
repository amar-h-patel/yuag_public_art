import React, { Component } from 'react';


import Headnav from "./Views/Headnav.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <div> <Headnav/> </div>

        </header>
        <p className="App-intro">
          Welcome to YUAG Public Art
        </p>
      </div>
    );
  }
}

export default App;
