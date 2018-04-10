import React, { Component } from 'react';

import Jumbo from "./Views/Jumbo.js";
import Gallery from "./Views/Gallery.js";
import Headnav from "./Views/Headnav.js";
import Viewer from "./Views/Viewer.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          
          <div> <Headnav/> </div>
          <div> <Jumbo/> </div>
          


        </header>
        <p className="App-intro">
          <div> <Gallery/> </div>
          <div> <Viewer/> </div>
        </p>
      </div>
    );
  }
}

export default App;
