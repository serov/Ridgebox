import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './promoblockhold.css';



class PromoBlockHold extends Component {



  render() {



    return (
      <div>
        <Grid>
        <Row>
        	<Col mdOffset={4} xs={4} md={5}>
        		<p className='h0'>{this.props.header}</p>
        	</Col>
          <Col xs={12} md={3}>
              <span className='descriptionhold'>{this.props.description}</span>
              
          </Col>
          </Row>
          <Row>
        	<Col md={8}></Col> 
          </Row>
        </Grid>

      </div> 
    );
  }
}

export default PromoBlockHold;
