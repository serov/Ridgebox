import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './promoBlcok.css';



class PromoBlock extends Component {



  render() {



    return (
      <div className='wrapperProduction'>
      <Grid>
      	<Col xs={9} md={4}>
      		<p className='h0'>Pro<br/>du<br/>ction</p>
      		<p className='description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      	</Col>
      	<Col md={8}>
      		<img src='' />
      	</Col>
      </Grid>
      </div> 
    );
  }
}

export default PromoBlock;
