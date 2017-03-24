import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './s-rate.css';
import eng_present from './img/eng_present.jpg'

class Srate extends Component {

  render() {

    return (
      <div className='wrappersrate'>
      <img className='hundred' src={eng_present}/>
	     <Grid>
		     <Row className='text-center'>
		     	<Col md={12} xs={12} >
          <p className='srate-subline text-center '>100% customer satisfaction rate. Ask our clients</p></Col>
		     </Row>
	     </Grid>
      </div> 
    );
  }
}

export default Srate;
