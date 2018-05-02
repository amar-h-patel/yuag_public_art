import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Browse extends Component{


	constructor(props) {
		super();
		this.state = {
			ready: false,
			art: ''
		};
	}
	ComponentDidMount(){
		// fetch('/browse').then(resp => resp.json()).then(resp => {
		// this.setState({art: resp})
	// })

	}


	render(){

		// let ready = this.state.ready;
		// if (ready === false){
    //    return (
		//
		// 		 <div style={{"padding": "2em"}}>
		// 			 <Panel>
		// 				 <p>Browse submitted items here</p>
		// 			 </Panel>
		// 		 </div>
    //       );
		//
    // }
		// var info = this.state.art;
		// const art = Object.keys(info).map((key) =>
		//
		//
    //                     (
    //                       <Panel style={{padding: '5%'}}>
		//
		//
    //                           <img style={{maxHeight: "30%", maxWidth: '35%', display: 'block', padding: '3%', float: "left"}} src={info[key]['images']['0']['url']} alt="thumbnail" />
		// 													</div>
 		// 											 <div style={{display: "inline-block", width: '40%'}}>
 		// 													 		<h2> info[key]["title"]</h2>
 		// 															<h3>  info[key]["artist"], info[key]["year"]</h3>
 		// 															<h4>  info[key]["location"]</h4>
 		// 															<h6>  info[key]["medium"]</h6>
 		// 														<p style={{textAlign: "left"}}> info[key]["notes"]</p>
 		// 												 </div>
		//
		//
 		// 								</Panel>
		// 
    //                      ));



		return (
			<div style={{"padding": "2em"}}>
						<Panel style={{padding: '5%'}}>
								<div>
										 <img style={{maxHeight: "30%", maxWidth: '35%', display: 'block', padding: '3%', float: "left"}}  alt="" src="https://i.pinimg.com/736x/19/8a/65/198a650805cd05047e1c83311018115e--maya-lin-yale.jpg" />
										 </div>
									 <div style={{display: "inline-block", width: '40%'}}>
											 		<h2> The Women's Table</h2>
													<h3> Maya Lin, 1993</h3>
													<h4> Rose Walk, by Sterling Memorial Library</h4>
													<h6> Outdoor Sculpture: Granite</h6>
												<p style={{textAlign: "left"}}>The most visible sign of the commemoration of women at Yale, the Women’s Table was designed by Maya Lin (BA 1981, M.Arch 1986), best known as the creator of the Vietnam War Memorial in Washington. The ambiguity of the sculpture inspires contemplation—and sometimes even interaction. As Lin has said of her work: “I consider the monuments to be true hybrids, existing between art and architecture. They have a specific need or function, yet their function is purely symbolic. </p>
										 </div>


						</Panel>
						<Panel style={{padding: '5%'}}>
								<div>
										 <img style={{maxHeight: "80%", maxWidth: '35%', display: 'block', padding: '3%', float: "left"}}  alt="" src="https://yalealumnimagazine.com/uploads/images/2100021/1320695798/civilwar_entrance.jpg" />
										 </div>
									 <div style={{display: "inline-block", width: '40%'}}>
											 		<h2> Peace, Devotion, Memory, and Courage</h2>
													<h3> Henry Hering, 1913</h3>
													<h4> Memorial Hall</h4>
													<h6> Relief Sculpture: Marble</h6>
												<p style={{textAlign: "left"}}>Henry Hering’s four allegorical sculptures punctuate the progression of names inscribed in the marble walls of Memorial Hall. Guarding a history of sacrifice in war by Yale graduates, these figures carved in high relief recall antique funerary statues to declare the timelessness of this mausoleum-like space. Dynamic crevices and profound shadows temper the rigid austerity of the cold marble bodies, </p>
										 </div>


						</Panel>
			</div>
		);

	}
}
export default Browse;
