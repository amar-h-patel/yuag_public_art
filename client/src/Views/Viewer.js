import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import Jumbo from "./Jumbo.js";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

class Viewer extends Component{

	render(){
		return(
		<div>
		<div> <Jumbo/> </div>
		<div style={{display: 'inline-block', width: '60%'}}>
			<Carousel >
			  <Carousel.Item>
			    <img style={{width: '100%'}}  alt="" src="https://i.pinimg.com/736x/19/8a/65/198a650805cd05047e1c83311018115e--maya-lin-yale.jpg" />
			    <Carousel.Caption>
			      <h3>The Women’s Table, 1993</h3>
			      <p> Maya Lin (b. 1959; B.A. 1981, M.Arch. 1986, D.F.A. 1987) Location: Rose Walk, by Sterling Memorial Library</p>
			    </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			    <img style={{ width: '100%'}} alt="" src="https://yalealumnimagazine.com/uploads/images/6100061/1433191095/dailysnap0602.jpg" />
			    <Carousel.Caption>
			      <h3>Giamatti Bench, 1990</h3>
			      <p> David Sellers (b. 1938; B.S. 1960, M.Arch. 1965) and James Sardonis (b. 1951) Location: Old Campus </p>
			    </Carousel.Caption>

			  </Carousel.Item>

			  <Carousel.Item>
			    <img style={{ width: '100%'}} alt="" src="https://yalealumnimagazine.com/uploads/images/2100021/1320695798/civilwar_entrance.jpg" />
			    <Carousel.Caption>
			      <h3>Peace, Devotion, Memory, and Courage, 1913</h3>
			      <p> Henry Hering (1874-1949) Location: Memorial Hall</p>
			    </Carousel.Caption>



			  </Carousel.Item>

			</Carousel>
		</div>
		</div>

			);
	}






}

export default Viewer;