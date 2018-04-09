import React, { Component } from 'react';

import Jumbo from "./Views/Jumbo.js";
import Gallery from "./Views/Gallery.js";
import Headnav from "./Views/Headnav.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <div> <Headnav/> </div>
          <div> <Jumbo/> </div>
          <div> <Gallery/> </div>


        </header>
        <p className="App-intro">
          Welcome to YUAG Public Art
        </p>
      </div>
    );
  }
}

export default App;
