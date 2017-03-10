import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './team.css';
import Teammember from './teammember.js'
import Tomas from './img/tomas.png';
import Olivia from './img/olivia.png';
import Ashwin from './img/ashwin.png';
import Stephen from './img/stephen.png'
import Jenna from './img/jenna.png'


class Team extends Component {

  render() {

    return (
      <div className='wrapperTeam'>
	     <Grid>
		     <Row>
		     	<Col xs={12}><h2 className='header-text'>Our Team</h2></Col>	
		     </Row>
		      <Row className='text-center'>
		     	<Col xs={6} mdOffset={1} md={2}><Teammember photo={Tomas} name='Tomas Moreno-Johnson' position='Business Developer'/></Col>	
		     	<Col xs={6} md={2}><Teammember photo={Olivia} name='Olivia Wainhouse' position='Director of Sales'/></Col>
		     	<Col xs={6} md={2}><Teammember photo={Ashwin} name='Ashwin Dayal' position='Director of Innovation'/></Col>
		     	<Col xs={6} md={2}><Teammember photo={Stephen} name='Stephen Bogda' position='Director of Product'/></Col>
		     	<Col xs={6} md={2}><Teammember photo={Jenna} name='Jenna Cunningham' position='Lead Designer'/></Col>
		     </Row>
	     </Grid>
      </div> 
    );
  }
}

export default Team;
