import React, { Component } from 'react';
import Navbar from './Views/Navbar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <MuiThemeProvider>
          <div> <Navbar/> </div>
          </MuiThemeProvider>
        </header>
        <p className="App-intro">
          Welcome to YUAG 
        </p>
      </div>
    );
  }
}

export default App;
