import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './form.css';


class Team extends Component {

  render() {


    return (
      <div className='wrapper-form'>
      	<form id="form" class="topBefore">
		
		  <input id="name" type="text" placeholder="NAME" />
		  <input id="email" type="text" placeholder="E-MAIL" />
		  <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
	  <input id="submit" type="submit" value="GO!" />
	  
		</form>
    </div>
    );
  }
}

export default Team;
