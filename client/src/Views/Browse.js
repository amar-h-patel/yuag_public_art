import React, { Component } from 'react';
import { Panel, Pager } from 'react-bootstrap';

class Browse extends Component{

	constructor(props) {
		super();
		this.state = {
			ready: false,
			art: '',
			images: [],
			current: 0,
		};
		this.getImages = this.getImages.bind(this);
	}

	async componentDidMount(){
		//	Will fetch the data from the db as a json and store JSON to this.state
		let tmp;
		const artData = await fetch('/pull').then((response) => response.json())
		.then((response) => {
			tmp = response;
			this.setState({
				art: response,
				ready: true
			});
		})
		console.log(this.state.art);
		console.log(tmp);

		var key=this.state.current;
		this.getImages(key);
		console.log(this.state.images);
	}

async getImages(key) {
	let filename = JSON.stringify({id: this.state.art[key]["yuag_id"]});
	console.log("fetch image " + key);
	var myImage = document.querySelector('.my-image');
	const imFIle = await fetch('/file',{
		method: 'POST',
		headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				responseType: 'blob'
		},
		body: filename,
	}).then((resp) => {
			const reader = resp.body.getReader();
			return new ReadableStream({
				start(controller) {
					return pump();
					function pump() {
						return reader.read().then(({ done, value }) => {
							// When no more data needs to be consumed, close the stream
							if (done) {
									controller.close();
									return;
							}
							// Enqueue the next data chunk into our target stream
							controller.enqueue(value);
							return pump();
						});
					}
				}
			})
		}).then(stream => new Response(stream))
		.then(response => response.blob())
		.then(blob => URL.createObjectURL(blob))
		.then(url => {
				this.setState({
					images: this.state.images.concat(url),
				})
		})
}

onPrevious(){
	this.setState({
		current: this.state.current - 1,
	}, async () => {
		try{
			this.getImages(this.state.current);
		} catch (e) {
			console.log(e);
		}
	});

}

onNext(){
	this.setState({
		current: this.state.current + 1,
	}, async () => {
		try {
			this.getImages(this.state.current);
		} catch (e) {
			console.log(e);
		}
	});
}
	render(){
		//Once db integration set up, will conditionally render content once fetched
		let ready = this.state.ready;
		if (ready === false || !this.state.art){
			return (

				<div style={{"padding": "2em"}}>
					<Panel>
						<p>Browse submitted items here</p>
					</Panel>
				</div>
			);

		}
		var info = this.state.art;
		var im = this.state.images
		var key = String(this.state.current);
		console.log(im);

		const pages = (
			<Pager style={{paddingLeft: '5%', paddingRight: '5%'}}>
				<Pager.Item previous disabled={this.state.current == 0} onClick={this.onPrevious.bind(this)}>
					Previous
				</Pager.Item>
				<Pager.Item next disabled={this.state.current == info.length - 1 } onClick={this.onNext.bind(this)}>
					Next
				</Pager.Item>
			</Pager>
		);

		const art =
		(
			<Panel style={{justifyContent: 'space-around', alignItems: 'center',display: 'flex', flexWrap: 'nowrap', flexDirection: 'row', padding: '5%'}}>
					<img style={{minWidth: "40%", maxWidth: '55%', display: 'block', padding: '3%', float: "left", position: 'relative', overflow: 'auto', flexShrink: '0'}}  alt="no render" src={im[key]} />
				<div style={{display: "flex", width: '40%', flexDirection: 'column',alignSelf: 'stretch'}}>
					<div>
						<h2> {info[key]["subject"]}</h2>
						<h3> {info[key]["artist"]}, {info[key]["creation_year"]}</h3>
						<h4>{info[key]["location"]}</h4>
						<h6> {info[key]["Medium"]}</h6>
					</div>
					<p style={{textAlign: "left"}}>&#9;{info[key]["note"]} </p>
				</div>


			</Panel>

		);

		return (
			<div>
						{pages}
						{art}
			</div>

		);


	}
}
export default Browse;
