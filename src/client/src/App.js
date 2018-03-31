import React, { Component } from 'react';
import Navbar from './Views/Navbar.js';
import ArtDisplay from './Views/ArtDisplay.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <header>
          <div> <Navbar/> </div>
        </header>
        <h1>
          Welcome to YUAG 
        </h1>
        <ArtDisplay/>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
