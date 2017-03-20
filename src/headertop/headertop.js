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
     <Col className='' xs={12} md={4}><Link className='logolink' to='/start'><img src={Logosmall}/></Link></Col>
     <Col className='text-center' xs={12} md={8}>
        <ul className='nav2' >
          <li className='header-top-li'><Link className='header-top-a' to='/start'>Home</Link></li>
          <li className='header-top-li'><Link className='header-top-a' to='/production'>Production</Link></li>
          <li className='header-top-li'><Link className='header-top-a' to='/engineering'>Engineering</Link></li>
          <li className='header-top-li'><Link className='header-top-a' to='/Holdings'>Holdings</Link></li>
        </ul>
     </Col>
     </div>
     </Grid>

              
    )    
  }
}

export default Headertop;