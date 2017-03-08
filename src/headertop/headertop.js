import React, { Component } from 'react';
import './headertop.css';
import { Grid, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';
import Logosmall from './img/small-logo.png'

class Headertop extends Component {
	constructor
  render() {

  	var floatLeft = {
  		float: 'left',
  	}

    return (

     <Grid >
     <div id='header'>
     <Col className='' xs={12} md={4}><Link to='/start'><img src={Logosmall}/></Link></Col>
     <Col className='text-center' xs={12} md={8}>
        <ul className='nav2' >
          <li><a href="default.asp">Home</a></li>
          <li><a href="news.asp">Production</a></li>
          <li><a href="contact.asp">Engineering</a></li>
          <li><a href="about.asp">Holdings</a></li>
        </ul>
     </Col>
     </div>
     </Grid>

              
    )    
  }
}

export default Headertop;