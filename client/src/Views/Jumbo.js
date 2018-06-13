import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';



const title = {
  color: "rgb(233, 234, 239)",
  textShadow: "3px 3px #373636"
};

class Jumbo extends Component {
  render() {

    return (
      <div className="Jumbo">
        <Jumbotron style={{backgroundImage: "url('https://yalealumnimagazine.com/uploads/images/5400054/1414592597/vanderbilt.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
            <h1 style={title}>Public Art at Yale</h1>
            <br/>

            <br/>
            <br/>

            <Button style={{textShadow: "0px 0px #373636"}} bsStyle="primary" href="/about" >Learn more</Button>
            <br/>
            <br/>
            <Button style={{textShadow: "0px 0px #373636"}} bsStyle="primary" href="/submit" >Submit a Piece</Button>
            {/*link these!*/}

        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;
