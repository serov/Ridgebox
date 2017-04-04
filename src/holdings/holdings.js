import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './holdings.css';
import Headertop from '.././headertop/headertop.js';
import PromoblockHold from '.././promoblockhold/promoblockhold.js';
import Contacts from '.././contacts/contacts.js'



class Holdings extends Component {



  render() {



    return (
      <div className='wrapperHoldings'>
	      	<div className='floatBlock yellow1'></div>
		    <div className='floatBlock red1'></div>
		    <div className='floatBlock green1'></div>
		    <div className='floatBlock purple1'></div>
        <Headertop />
        <PromoblockHold header={['hold', <br/>, 'ings']} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' buttontext='Ask a question' />
        <Contacts />
      </div> 
    );
  }
}

export default Holdings;
