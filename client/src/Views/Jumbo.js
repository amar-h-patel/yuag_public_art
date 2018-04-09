import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import {Jumbotron} from "react-bootstrap";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

class Jumbo extends Component {
  render() {
    var styles={ // not rendering image!
        "background-image": "https://images.pexels.com/photos/574345/pexels-photo-574345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "background-size": "cover"
    };
    return (
      <div className="Jumbo">
        <Jumbotron syle={styles}>
            <h1>Public Art at Yale</h1>
            <br/>
            <p>
            A crowd-sourced archive of art in public spaces.
            </p>
            <br/>
            <br/>

            <Button bsStyle="primary" href="#" >Learn more</Button>
            <br/>
            <br/>
            <Button bsStyle="primary" href="#" >Submit a Piece</Button> 
            {/*link these!*/}

        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;





