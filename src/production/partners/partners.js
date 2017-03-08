import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './partners.css';
import weiss from './img/weiss.png'
import brandbox from './img/brandbox.png'

class Partners extends Component {

  render() {

    return (
      <div className='wrapperPartners'>
	     <Grid>
		     <Row>
		     	<Col xs={12}><h2 className='header-text'>Our Partners</h2></Col>
		     </Row>
		     <Row>
		     	<Col xs={12} md={6} className='text-center'>
		     		<img src={weiss} />
		     		<p className='bodytext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
		     		<p><a className='link' href='#'>See what we doing for Weiss</a></p>
		     	</Col>
		     	<Col xs={12} md={6} className='text-center'>
		     		<img src={brandbox} />
		     		<p className='bodytext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
		     		<p><a className='link' href='#'>See what we doing for Brandbox</a></p>
		     		</Col>
		     </Row>
	     </Grid>
      </div> 
    );
  }
}

export default Partners;
