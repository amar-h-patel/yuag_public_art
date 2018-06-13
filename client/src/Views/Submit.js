import React, {Component} from 'react';
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

class Submit extends Component {

    constructor(props) {
        super();
        this.state = {
            message: "",
            id: '',
            subject: '',
            artist: '',
            date: '',
            medium: '',
            dimensions: '',
            location: '',
            owner: '',
            source: '',
            value: '',
            restrictions: '',
            condition: '',
            notes: '',
            surveyor: '',
            dateSurveyed: ''
        };
        //bind functions to this
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelector = this.handleSelector.bind(this);
    }

    async handleSubmit(e) {
        let submission = JSON.stringify({
            id: this.state.id,
            subject: this.state.subject,
            artist: this.state.artist,
            date: this.state.date,
            medium: this.state.medium,
            dimensions: this.state.dimensions,
            location: this.state.location,
            owner: this.state.owner,
            source: this.state.source,
            value: this.state.value,
            restrictions: this.state.restrictions,
            condition: this.state.condition,
            notes: this.state.notes,
            surveyor: this.state.surveyor,
            dateSurveyed: this.state.dateSurveyed
        });
        //post image file
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.state.id);
        fetch('/upload', {
            method: 'POST',
            body: data,
        });
        //stop standard html form post
        e.preventDefault();
        //send json of the art submission
        let response = await fetch('/submit', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: submission,
        });
        //on response, change state message and scroll to top
        if (response.status === 200) {
            this.setState({message: "Successfully Submitted!"});
            this.setState({
                id: '',
                subject: '',
                artist: '',
                date: '',
                medium: '',
                dimensions: '',
                location: '',
                owner: '',
                source: '',
                value: '',
                restrictions: '',
                condition: '',
                notes: '',
                surveyor: '',
                dateSurveyed: ''
            });
        } else if (response.status === 400) {
            this.setState({message: "Invalid submission :("});
        } else if (response.status === 500) {
            this.setState({message: "Server error - try again in a minute"})
        } else {
            this.setState({message: "Unknown error."})
        }
        window.scrollTo(0, 0);

    }
    //Update state with each element of the form as controlled element
    handleChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSelector(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    render() {
        let status = <div></div>;
        if (this.state.message) {
            status = (<div style={{"padding": "5%"}}>
                <Alert bsStyle="info" style={{"width": "50%", "display": "inline-block", "margin": "auto"}}>
                    <strong> {this.state.message} </strong>
                </Alert></div>);
        }

        return (
            <div>
                <div style={divs}>
                    <h1> Submit A Work of Public Art </h1>
                    {status}
                    <form onSubmit={this.handleSubmit} style={form}>
                        <label>Identification Number </label>
                        <input onChange={this.handleChange} value={this.state.id} type="text" id="id" name="id"
                               placeholder="Enter ID#..."/>

                        <label>Subject/Title</label>
                        <input onChange={this.handleChange} value={this.state.subject} type="text" id="subject"
                               name="subject" placeholder="Enter Subject/Title..."/>

                       <label>Artist</label>
                       <input onChange={this.handleChange} value={this.state.artist} type="text" id="artist"
                              name="artist" placeholder="Enter Artist/Creator..."/>

                        <label>Date of Creation</label>
                        <input onChange={this.handleChange} value={this.state.date} type="text" id="date" name="date"
                               placeholder="Enter Year..."/>

                        <label>Medium</label>
                        <input onChange={this.handleChange} value={this.state.medium} type="text" id="medium"
                               name="medium" placeholder="Enter Medium..."/>

                        <label>Image of Art</label>
                        <input ref={(ref) => {
                            this.uploadInput = ref;
                        }} id="image" name="image" type="file"/>

                        <label>Dimensions</label>
                        <input onChange={this.handleChange} value={this.state.dimensions} type="text" id="dimensions"
                               name="dimensions" placeholder="Enter Dimensions..."/>

                        <label>Location</label>
                        <input onChange={this.handleChange} value={this.state.location} type="text" id="location"
                               name="location" placeholder="Enter Location..."/>

                        <label>Owner</label>
                        <input onChange={this.handleChange} value={this.state.owner} type="text" id="owner" name="owner"
                               placeholder="Enter Owner..."/>

                        <label>Source</label>
                        <select id="source" name="source"
                                value={this.state.source}
                                onChange={this.handleSelector}>
                            <option value="gift">Gift</option>
                            <option value="purchase">Purchase</option>
                        </select>

                        <label>Value</label>
                        <input onChange={this.handleChange} value={this.state.value} type="text" id="value" name="value"
                               placeholder="Enter Value..."/>

                        <label>Restrictions</label>
                        <input onChange={this.handleChange} value={this.state.restrictions} type="text"
                               id="restrictions" name="restrictions" placeholder="Enter Restrictions..."/>

                        <label>Condition</label>
                        <select id="condition" name="condition"
                                value={this.state.condition}
                                onChange={this.handleSelector}>
                            <option value="vandalism">Vandalism</option>
                            <option value="urgent">Urgent Treatment Needed</option>
                            <option value="needed">Treatement Needed</option>
                            <option value="maintenance">Maintenance Needed</option>
                            <option value="none">No Treatement Needed</option>
                        </select>

                        <label>Notes</label>
                        <input onChange={this.handleChange} value={this.state.notes} type="text" id="notes" name="notes"
                               placeholder="Enter Notes..."/>

                        <label>Surveyor</label>
                        <input onChange={this.handleChange} value={this.state.surveyor} type="text" id="surveyor"
                               name="surveyor" placeholder="Enter Surveyor..."/>

                        <label>Date Surveyed</label>
                        <input onChange={this.handleChange} value={this.state.dateSurveyed} type="text"
                               id="dateSurveyed" name="dateSurveyed" placeholder="Enter Date Surveyed..."/>

                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );

    }
}

export default Submit;
