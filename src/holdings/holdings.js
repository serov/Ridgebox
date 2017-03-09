import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './holdings.css';
import Headertop from '.././headertop/headertop.js';
import Promoblock from '.././promoblock/promoblock.js';
import pricon from '.././promoblock/img/pricon.png';
import prbg from '.././promoblock/img/prbg.jpg';



class Holdings extends Component {



  render() {



    return (
      <div className='wrapperHoldings'>
        <Headertop />
        <Promoblock header={['Pro', <br/>, 'du', <br/>, 'ction']} bgimage={prbg} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' buttontext='Ask a question'/>
      </div> 
    );
  }
}

export default Holdings;
