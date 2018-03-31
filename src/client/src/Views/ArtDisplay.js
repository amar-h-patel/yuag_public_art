import React, { Component } from 'react';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const card = {
  padding: "4%",
  display: 'inline-block',
  verticalAlign: 'top',
  width: '30%',
  margin: '20px'
};

const card2 = {
  width: "30%",
  maxHeight: "450px",
  padding: "2%",
  display: 'inline-block',
  verticalAlign: 'top',
};

const text = {
display: 'inline-block',
position: 'relative',
padding: "5%",
maxWidth: "55%"
};

const pad = {
  padding: "3%"
};

const contentStyle = {
  width: '85%',
  maxWidth: 'none'
};

const im = {
  maxHeight: '450px',
  maxWidth: '100%',
  verticalAlign: 'top'
};

class ArtDisplay extends Component{
  state = {
    open1: false,
    open2: false
  };

  handleOpen1 = () => {
    this.setState({open1: true});
  };

  handleOpen2 = () => {
    this.setState({open2: true});
  };

  handleClose = () => {
    this.setState({open1: false,
      open2: false});
  };
	render() {
     const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
<div>

    			 <Card style={card}>
            <CardMedia
              overlay={<CardTitle title="Gallows & Lollipops" subtitle="Hewitt Quadrangle"/>}
            >
            <img src="http://b02.deliver.odai.yale.edu/56/12/5612afc4-4003-4b8e-a2b5-302c75f8cd8e/ag-obj-15224-002-rpd-med.jpg" alt="" stlye={im}/>
            </CardMedia>
             <div>
        <RaisedButton label="More Information" onClick={this.handleOpen1} style={pad} />
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open1}
          contentStyle={contentStyle}
          onRequestClose={this.handleClose}
        >
        <Card style={card2}>
            <CardMedia
              overlay={<CardTitle title="Gallows & Lollipops" subtitle="Hewitt Quadrangle"/>}
            >
            <img src="http://b02.deliver.odai.yale.edu/56/12/5612afc4-4003-4b8e-a2b5-302c75f8cd8e/ag-obj-15224-002-rpd-med.jpg" alt="" />
            </CardMedia>
        </Card>
         <div style = {text}>
            <h1> Gallows &amp; Lollipops </h1>
            <h3> Alexander Calder </h3>
            <h5> Hewitt Quadrangle </h5>
            <h5> 1960 </h5>
            <h5> Painted Steel </h5>
            <p>The moving parts of Alexander Calder’s kinetic sculptures decorate and energize public spaces across the world. As the painted steel plates of Gallows and Lollipops hover and seesaw around the tip of their red tripod base, they obey chance atmospheric stimuli to destabilize the grid of Beinecke Plaza. Developed in the 1930s, the mobile became Calder’s trademark, combining influences from the avant-garde artists of prewar Paris. While his primary colors follow the purist palette of Piet Mondrian, the animated geometric shapes resemble the abstracted objects and animals in the surrealist paintings of Joan Miró and Paul Klee. This work’s title converts the swaying arms into images both delightful and unsettling, suggesting the endless flux and precarious balance of forces at work within the unconscious mind.
            </p>
          </div>
        </Dialog>
      </div>
          </Card>

           <Card style={card}>
            <CardMedia
              overlay={<CardTitle title="Nathan Hale" subtitle="Old Campus"/>}
            >
            <img src="https://visitorcenter.yale.edu/sites/default/files/hale.jpg" alt="" stlye={im}/>
            </CardMedia>
             <div>
        <RaisedButton label="More Information" onClick={this.handleOpen2} style={pad} />
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open2}
          contentStyle={contentStyle}
          onRequestClose={this.handleClose}
        >
        <Card style={card2}>
            <CardMedia
              overlay={<CardTitle title="Nathan Hale" subtitle="Old Campus"/>}
            >
            <img src="https://visitorcenter.yale.edu/sites/default/files/hale.jpg" alt="" />
            </CardMedia>
        </Card>
         <div style = {text}>
            <h1> Nathan Hale </h1>
            <h3> Bela Lyon Pratt</h3>
            <h5> Old Campus </h5>
            <h5> 1913 </h5>
            <h5> Bronze </h5>
            <p>An idealized bronze statue honors the heroism of Yale College graduate Nathan Hale (1755-1776; B.A. 1773, M.A. 1776), a young schoolteacher captured and executed by the British during the American Revolution. Hale’s youth and defiant last words, inscribed on the statue’s base, made him a national hero, and his legend remained powerful over a century after his death when alumni donated this monument. Unable to afford the renowned Gilded Age sculptor Augustus Saint-Gaudens, they commissioned the piece from his former assistant, Bela Pratt, who had studied at the Yale School of the Fine Arts under John Ferguson Weir. Combining dignity and beauty with a traditional martyr pose, Pratt’s statue stands beside Connecticut Hall, where Hale lived as a student. 
            </p>
          </div>
        </Dialog>
      </div>
          </Card>

    </div>
    );
  }


}

export default ArtDisplay;