import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './graphs.css';
import eng_checkbox from './img/eng_checkbox.png';
import graphs_bg from './img/graphs_bg.jpg'

class Team extends Component {

  render() {


    return (
      <div className='wrapperGraphs'>
	     <Grid>
		     <Row className='text-center'>
		     	<Col xs={12}><h2 className='header-text-eng text-center'>Why it’s profitable <br /> to work with us</h2><p className='bodytext-eng'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. voluptas sit aspernatur aut odit aut fugit, </p></Col>	
		     </Row>
		      <Row>
		      	<Col md={4}>
		      		<h5 className='margin-bottom-30'><strong>Time on Development</strong></h5>
		      		<div className='margin-bottom-20'><span className='graph-text'>Inhouse</span><div className='meter'>
					  <span className='length'></span></div>
					</div>

					<div className='margin-bottom-20'><span className='graph-text'>Ridgebox</span><div className='meter active'>
					  <span className='length'></span></div>~1,5x less
					</div>

		      		<p className='margin-top-30'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>


		      	</Col>
		      	<Col md={4}><h5 className='margin-bottom-30'><strong>Development costs</strong></h5>
		      		<div className='margin-bottom-20'><span className='graph-text'>Inhouse</span><div className='meter'>
					  <span className='length'></span></div>
					</div>

					<div className='margin-bottom-20'><span className='graph-text'>Ridgebox</span><div className='meter active'>
					  <span className='length'></span></div>~2x less
					</div>
					<p className='margin-top-30'>
		      		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></Col>
		      	<Col md={3}><h5 className='margin-bottom-30'><strong>Additonal costs</strong> </h5>
		      	<ul>
		      		<li>Team management</li>
		      		<li>Office Fees</li>
		      		<li>Human Resourses</li>
		      	</ul>
		      	<p><ul className='active-list'><li>We take
					everything on us</li></ul></p>
		      	</Col>
		     </Row>
	     </Grid>
      </div> 
    );
  }
}

export default Team;
