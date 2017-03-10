import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './quote.css';
import polygon from './img/polygon.png'

class Quote extends Component {

  render() {

    return (
      <div className='wrapperquote'>
	     <Grid>
		     <Row>
		     	<Col md={12}><p className='quoteText'>WE BUILDUNG DIGITAL <span className='markquote'>HOMES</span> FOR YOUR BUSINESS</p></Col>
		     </Row>
	     </Grid>
      </div> 
    );
  }
}

export default Quote;
