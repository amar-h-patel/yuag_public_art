import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';
import './Jumbo.css';

class Jumbo extends Component {
  render() {
    var h1style = {
      color: 'white',
    }
    return (
      <div className="Jumbo">
        <Jumbotron styles={h1style}>
            <h1>Public Art at Yale</h1>
            <br/>

            <br/>
            <br/>

            <Button bsStyle="primary" href="/about" >Learn more</Button>
            <br/>
            <br/>
            <Button bsStyle="primary" href="/submit" >Submit a Piece</Button> 
            {/*link these!*/}

        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;





