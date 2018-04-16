import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Headnav from "./Views/Headnav.js";
import Viewer from "./Views/Viewer.js";
import Maps from "./Views/Maps.js";
import Submit from "./Views/Submit.js";
import About from "./Views/About.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>
          
          <div> <Headnav/> </div>

        </header>
         <Route path="/maps" component={Maps}/>
         <Route path="/submit" component={Submit}/>
         <Route path="/about" component={About}/>
         <Route exact path="/" component={Viewer}/>
       
      </div>
      </Router>
    );
  }
}

export default App;
