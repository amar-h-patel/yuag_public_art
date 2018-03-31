import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class Navbar extends Component {

   render() {
    return (
      <Toolbar>
      <ToolbarGroup firstChild={true}>
        <RaisedButton label="YUAG Public Art" primary={true} />
      </ToolbarGroup>
      <ToolbarGroup>
          <ToolbarTitle text="A Curated Collection of Public Art at Yale University" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
          <RaisedButton label="Submit a Work of Public Art" secondary={true} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Navbar;
