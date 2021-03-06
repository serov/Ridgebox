import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router'
import './howdowework.css';
import react from './img/react.png'
import angular from './img/angular.png'
import saas from './img/saas.png'
import laptop from './img/laptop.png'

class Howdowework extends Component {

  render() {

    return (
      <div className='wrapperHowdowework'>
	     <Grid>
		     <Row>
		     	<Col xs={12} mdOffset={5} md={7}><h2 className='header-text-eng'>How Do We Work</h2></Col>
		     </Row>
		      <Row>
		      	<Col xs={12} md={5} className='laptop'><img src={laptop}/></Col>
		     	<Col xs={12} md={3}><p className='bodytext-eng'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p></Col>
		     	<Col xs={12} md={3}><p className='bodytext-eng'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
		     		<ul className='p-list'><li><Link className='p-link' to='/production'>See our long-terms partners</Link></li></ul></Col>
		     </Row>
		     <Row className='technologies'>
		     	<Col className='text-center' xs={12} mdOffset={5} md={7}> <div className='stroke'><p className='all-caps'>specialize in</p><img className='tech-logo' src={react}/> <img className='tech-logo' src={angular}/> <img src={saas}/></div></Col>
		     </Row>
		     
	     </Grid>
      </div> 
    );
  }
}

export default Howdowework;
