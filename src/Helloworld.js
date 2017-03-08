import React, { Component } from 'react';

const divStyle = {
  color: 'blue',
  fontSize: 40,
};

const {Grid, Row, Col} = require('react-flexbox-grid');



function Menu(props) {
	return <h1> Hello, {props.name}, {props.color}, {props.animal}</h1>
}

const menu1 = {
	name: 'Sarah',
	color: 'Red',
	animal: 'Elephant'

}

class Helloworld extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3} >Hello, world!</Col>
          <Col xs={6} md={3} >Hello, world!</Col>
          <Col xs={6} md={3} >Hello, world!</Col>
        </Row>
      </Grid>
     
    );
    
  }
}

export default Helloworld;