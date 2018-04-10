import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

//import {styleMaps} from 'react-bootstrap';
//import { bootstrapUtils } from 'react-bootstrap/lib/utils';


class Headnav extends Component {
    render() {
      var styles={
        "height": 105,
        "border-radius": 0,
        "color": "#9B7C39",
        "margin": 0
      };
      var imgStyle={
        "height": 100
      };
      var textStyle={ // not sure how to change the color of the text
        "color": "white",// no
        "padding-top": 53,
      };
      return (
        <Navbar style={styles} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand >
              <img style={imgStyle} src="https://artgallery.yale.edu/sites/all/themes/artgallery/logo.png" alt="YUAG"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header> 
          <Navbar.Collapse>
            <Nav style={textStyle} pullRight>
              <NavItem eventKey={1} href="#">
                Browse
              </NavItem>
              <NavItem eventKey={2} href="#">
                Submit
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar> );
      }
    }

export default Headnav;

