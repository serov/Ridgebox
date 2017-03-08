import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './production.css';
import Headertop from '.././headertop/headertop.js';
import Promoblock from '.././promoblock/promoblock.js';
import Partners from './partners/partners.js'; 
import pricon from '.././promoblock/img/pricon.png';
import prbg from '.././promoblock/img/prbg.jpg';



class Production extends Component {



  render() {



    return (
      <div className='wrapperProduction'>
        <Headertop />
        <Promoblock image={pricon} bgimage={prbg} />
        <Partners />
      </div> 
    );
  }
}

export default Production;
