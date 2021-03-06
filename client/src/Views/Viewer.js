import React, { Component } from 'react';
import {Carousel} from "react-bootstrap";
import Jumbo from "./Jumbo.js";
import '../../node_modules/bootstrap3/dist/css/bootstrap.css';

const title = {
  color: "rgb(233, 234, 239)",
  textShadow: "0.15em 0 #000, 0 0.15em #000, -0.15em 0 #000, 0 -0.15em #000, 0.15em 0.15em #000,-0.15em 0.15em #000,-0.15em -0.15em #000,0.15em -0.15em #000,"
};

class Viewer extends Component{
//Standard Bootstrap Carousel Element

	render(){
		return(
			<div style={title}>
				<div> <Jumbo/> </div>
				<div style={{display: 'inline-block', width: '60%'}}>
					<Carousel >
						<Carousel.Item>
							<img style={{width: '100%'}}  alt="" src="https://i.pinimg.com/736x/19/8a/65/198a650805cd05047e1c83311018115e--maya-lin-yale.jpg" />

							<Carousel.Caption>
								<div style={{backgroundColor: 'rgba(0,0,0,0.23)'}}>
									<h3>The Women’s Table, 1993</h3>
									<p> Maya Lin (b. 1959; B.A. 1981, M.Arch. 1986, D.F.A. 1987) Location: Rose Walk, by Sterling Memorial Library</p>
								</div>
							</Carousel.Caption>


						</Carousel.Item>
						<Carousel.Item>
							<img style={{ width: '100%'}} alt="" src="https://yalealumnimagazine.com/uploads/images/6100061/1433191095/dailysnap0602.jpg" />

							<Carousel.Caption>
								<div style={{backgroundColor: 'rgba(0,0,0,0.23)'}}>
									<h3>Giamatti Bench, 1990</h3>
									<p> David Sellers (b. 1938; B.S. 1960, M.Arch. 1965) and James Sardonis (b. 1951) Location: Old Campus </p>
								</div>
							</Carousel.Caption>

						</Carousel.Item>

						<Carousel.Item>
							<img style={{ width: '100%'}} alt="" src="https://yalealumnimagazine.com/uploads/images/2100021/1320695798/civilwar_entrance.jpg" />
							<Carousel.Caption>
								<div style={{backgroundColor: 'rgba(0,0,0,0.23)'}}>
									<h3>Peace, Devotion, Memory, and Courage, 1913</h3>
									<p> Henry Hering (1874-1949) Location: Memorial Hall</p>
								</div>
							</Carousel.Caption>



						</Carousel.Item>

					</Carousel>
				</div>
			</div>

		);
	}






}

export default Viewer;
