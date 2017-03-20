import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './promoblockeng.css';



class PromoBlockEng extends Component {



  render() {



    return (
      <div>
        <Grid>
        <Row className='top-buffer'>
        	<Col xs={4} md={4}>
        		<p className='h0'>{this.props.header}</p>
        	</Col>
          <Col xs={12} md={4}>
              <span className='descriptioneng'>{this.props.description}</span>
              
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

export default PromoBlockEng;
