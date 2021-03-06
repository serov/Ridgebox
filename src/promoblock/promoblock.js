import React, { Component } from 'react';
import { Grid, Col, Modal, Row } from 'react-bootstrap';
import './promoblock.css';



class PromoBlock extends Component {



  render() {



    return (
      <div>
        <Grid>
        <Row>
        	<Col xs={9} md={4}>
        		<p className='h0'>{this.props.header}</p>
        		<p className='description'>{this.props.description}</p>
              <form action="/example/">
                <button className='button' type="submit">{this.props.buttontext}</button>
              </form>

        	</Col>
          </Row>
          <Row>
        	<Col md={8}></Col> 
          </Row>
          <hr className='hrstyle'/>
        </Grid>

      </div> 
    );
  }
}

export default PromoBlock;
