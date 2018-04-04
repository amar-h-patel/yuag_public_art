import React, { Component } from 'react';


class Head extends Component {
  constructor(props){
    super(props);
    this.state ={ string: ""}
  }

  componentDidMount(){
    return fetch('/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          string: responseJson.message,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    return (
      <div >
        This is going to be a message: {this.state.string}
      </div>
    );
  }
}

export default Head;