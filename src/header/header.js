import React, { Component } from 'react';
import './header.css'; 

class Header extends Component {
  render() {

	var displayTable = {
  		display: 'table',
  		height: '100%',
  		width: '100%',
  	};

  	var displayTableCell = {
  		verticalalign: 'middle',
  	};


    return (
    	<div style={displayTable}>
    	<div style={displayTableCell}>
         <h1 className="header"><span className="h1-word1">Turning </span>
         						<span className="h1-word2">dreams </span>
         						<span className="h1-word3">into </span>
         						<span className="bold h1-word4">reality.</span>
       	 </h1>
       	 </div></div>
    );
    
  }
}

export default Header;