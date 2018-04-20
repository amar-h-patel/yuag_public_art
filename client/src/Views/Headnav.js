import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

//import {styleMaps} from 'react-bootstrap';
//import { bootstrapUtils } from 'react-bootstrap/lib/utils';


class Headnav extends Component {
    render() {
      var styles={
        "height": 105,
        "borderRadius": 0,
        "color": "#9B7C39",
        "margin": 0
      };
      var imgStyle={
        "height": 100
      };
      var textStyle={ // not sure how to change the color of the text
        "color": "white",// no
        "paddingTop": 53,
      };
      return (
        <Navbar style={styles} inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>

              <img style={imgStyle} src="https://artgallery.yale.edu/sites/all/themes/artgallery/logo.png" alt="YUAG"/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav style={textStyle} pullRight>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem eventKey={1} href="/about">
                About
              </NavItem>
              <NavItem eventKey={2} href="/browse">
                Browse
              </NavItem>
              <NavItem eventKey={2} href="/submit">
                Submit
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar> );
      }
    }

export default Headnav;
