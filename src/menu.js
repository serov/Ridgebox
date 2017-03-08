import React, { Component } from 'react';
const divStyle = {
  color: 'blue',
  fontSize: 40,
};

class Menu extends Component {
  render() {
    return (
    <div id="footer">
      <div class="row">
        <div class="col-md-4"  style={divStyle}> Hello </div>
        <div class="col-md-4"> Hello </div>
        <div class="col-md-4"> Hello </div>
      </div>
	 </div>
    );
    
  }
}

export default Menu;