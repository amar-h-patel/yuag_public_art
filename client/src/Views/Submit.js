import React, { Component } from 'react';
import {FormGroup} from "react-bootstrap";
import {ControlLabel} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {HelpBlock} from "react-bootstrap";
import {Radio} from "react-bootstrap";

import {Button} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const form = {
	width: "40%",
    textAlign: "left",
    paddingLeft: "4%",
    display: "inline-block",
    paddingTop: "4%",
    paddingBottom: "8%"
};



class Submit extends Component{



	render(){
			const formInstance = (
 <div>
    <h1> Submit A Work of Public Art </h1>
  <form style={form}>

    <FieldGroup
      id="formControlsText"
      type="text"
      label="Identification Number"
      placeholder="Enter ID#"
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Subject/Title"
      placeholder="Enter Subject/Title"
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Date"
      placeholder="Enter Year"
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Medium"
      placeholder="Enter Medium"
    />
    
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="Image"
      help="Upload an image of the piece"
    />
     <FieldGroup
      id="formControlsText"
      type="text"
      label="Dimensions"
      placeholder="Enter Dimensions"
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Location"
      placeholder="Enter Current Location"
    />
     <FieldGroup
      id="formControlsText"
      type="text"
      label="Owner"
      placeholder="Enter Owner"
    />

    <FormGroup>
      <Radio name="radioGroup" inline>
        Gift
      </Radio>{' '}
      <Radio name="radioGroup" inline>
        Purchase
      </Radio>{' '}
    </FormGroup>

    <FieldGroup
      id="formControlsText"
      type="text"
      label="Appraisal Value"
      placeholder="Enter Value"
    />
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Restrictions"
      placeholder="Enter Restrictions"
    />

    <h4><strong> Condition </strong></h4>
    <FormGroup>
      <Radio name="radioGroup2">Vandalism</Radio>
      <Radio name="radioGroup2">Urgent Treatment Needed</Radio>
      <Radio name="radioGroup2">Treatement Needed</Radio>
      <Radio name="radioGroup2">Maintenance Required</Radio>
      <Radio name="radioGroup2">No Treatement Needed</Radio>
    </FormGroup>

    <FieldGroup
      id="formControlsText"
      type="text"
      label="Notes"
      placeholder="Enter Notes"
    />

    <FieldGroup
      id="formControlsText"
      type="text"
      label="Surveyed By"
      placeholder="Enter Surveyor"
    />

    <FieldGroup
      id="formControlsText"
      type="text"
      label="Date Surveyed"
      placeholder="Enter Date Surveyed"
    />

   

    <Button type="submit">Submit</Button>
  </form>
  </div>
);

		return (
			formInstance
			);

	}
}
export default Submit;