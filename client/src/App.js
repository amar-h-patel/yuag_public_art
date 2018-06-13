import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Headnav from "./Views/Headnav.js";
import Viewer from "./Views/Viewer.js";
import Submit from "./Views/Submit.js";
import About from "./Views/About.js";
import Browse from "./Views/Browse.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header>

          <Headnav/>

        </header>
         <Route path="/browse" component={Browse}/>
         <Route path="/submit" component={Submit}/>
         <Route path="/about" component={About}/>
         <Route exact path="/" component={Viewer}/>

      </div>
      </Router>
    );
  }
}

export default App;
