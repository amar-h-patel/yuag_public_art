import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';

import "./Submit.css";

const form = {
	width: "40%",
    textAlign: "left",
    paddingLeft: "4%",
    display: "inline-block",
    paddingTop: "4%",
    paddingBottom: "8%"
};


const divs = {
  borderRadius: "5px",
backgroundColor: "#f2f2f2",
padding: "20px"
};

class Submit extends Component{

  constructor(props){
    super();
    this.state = {
      type: "tt",
      message: "",
      id: '',
      subject: '',
      date: '',
      medium: '',
      dimensions: '',
      location: '',
      owner: '',
      source: '',
      value: '',
      restrictions: '',
      conditon: '',
      notes: '',
      surveyor: '',
      dateSurveyed: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelector = this.handleSelector.bind(this);
  }

  handleSubmit(e) {
    let submission = JSON.stringify({
      id: this.state.id,
      subject: this.state.subject,
      date: this.state.date,
      medium: this.state.medium,
      dimensions: this.state.dimensions,
      location: this.state.location,
      owner: this.state.owner,
      source: this.state.source,
      value: this.state.value,
      restrictions: this.state.restrictions,
      conditon: this.state.conditon,
      notes: this.state.notes,
      surveyor: this.state.surveyor,
      dateSurveyed: this.state.dateSurveyed


    });
   console.log(submission);
   e.preventDefault();
   fetch('/submit', {
   method: 'POST',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   body: submission,
 });
 this.setState({message: "Successfully Submitted!"});
}
handleChange(event) {
  const target = event.target;
  const name = target.name;

  this.setState({
    [name]: target.value
  });
 }

handleSelector(event){
  const name = event.target.name;
  this.setState({[name]: event.target.value});
}

	render(){

   var status = <div></div> ;
   if(this.state.message){
     status = (<div style={{"padding": "5%"}}>
       <Alert bsStyle="success" style={{"width": "50%", "display": "inline-block", "margin": "auto"}}>
       <strong> Successfully Submitted! </strong>
       </Alert></div>);
   }



		return (
      <div>


           <div style={divs}>
             <h1> Submit A Work of Public Art </h1>
             {status}
             <form onSubmit={this.handleSubmit} style={form}>
               <label for="id">Identification Number </label>
               <input onChange={this.handleChange} value={this.state.id} type="text" id="id" name="id" placeholder="Enter ID#..."/>

               <label for="subject">Subject/Title</label>
               <input onChange={this.handleChange} value={this.state.subject}type="text" id="subject" name="subject" placeholder="Enter Subject/Title..."/>

               <label for="date">Date of Creation</label>
               <input onChange={this.handleChange} value={this.state.date}type="text" id="date" name="date" placeholder="Enter Year..."/>


               <label for="medium">Medium</label>
               <input onChange={this.handleChange} value={this.state.medium}type="text" id="medium" name="medium" placeholder="Enter Medium..."/>

               <label for="image">Image of Art</label>
               <input id="image" name="image" type="file"/>

               <label for="dimensions">Dimensions</label>
               <input onChange={this.handleChange} value={this.state.dimensions} type="text" id="dimensions" name="dimensions" placeholder="Enter Dimensions..."/>

               <label for="location">Location</label>
               <input onChange={this.handleChange} value={this.state.location}type="text" id="location" name="location" placeholder="Enter Location..."/>

               <label for="owner">Owner</label>
               <input onChange={this.handleChange} value={this.state.owner}type="text" id="owner" name="owner" placeholder="Enter Owner..."/>

               <label for="source">Source</label>
               <select id="source" name="source"
                 value={this.state.source}
                 onChange={this.handleSelector}
                 >
                 <option value="gift">Gift</option>
                 <option value="purchase">Purchase</option>

               </select>


               <label for="value">Value</label>
               <input onChange={this.handleChange} value={this.state.value}type="text" id="value" name="value" placeholder="Enter Value..."/>


               <label for="restrictions">Restrictions</label>
               <input onChange={this.handleChange} value={this.state.restrictions}type="text" id="restrictions" name="restrictions" placeholder="Enter Restrictions..."/>


               <label for="condtion">Condition</label>
               <select id="conditon" name="condition"
                 value={this.state.condition}
                 onChange={this.handleSelector}>
                 <option value="vandalism">Vandalism</option>
                 <option value="urgent">Urgent Treatment Needed</option>
                 <option value="needed">Treatement Needed</option>
                 <option value="maintenance">Maintenance Needed</option>
                 <option value="none">No Treatement Needed</option>


               </select>

               <label for="notes">Notes</label>
               <input onChange={this.handleChange} value={this.state.notes} type="text" id="notes" name="notes" placeholder="Enter Notes..."/>

               <label for="surveyor">Surveyor</label>
               <input onChange={this.handleChange} value={this.state.surveyor}type="text" id="surveyor" name="surveyor" placeholder="Enter Surveyor..."/>

               <label for="dateSurveyed">Date Surveyed</label>
               <input onChange={this.handleChange} value={this.state.dateSurveyed}type="text" id="dateSurveyed" name="dateSurveyed" placeholder="Enter Date Surveyed..."/>

               <input type="submit" value="Submit"/>
             </form>
           </div>
         </div>
			);

	}
}
export default Submit;
