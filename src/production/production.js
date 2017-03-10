import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './production.css';
import Headertop from '.././headertop/headertop.js';
import Promoblock from '.././promoblock/promoblock.js';
import Partners from './partners/partners.js'; 
import Quote from './quote/quote.js';
import Team from './team/team.js';
import Footer from '.././footer/footer.js';
import pricon from '.././promoblock/img/pricon.png';
import prbg from '.././promoblock/img/prbg.jpg';


class Production extends Component {



  render() {

    return (

      <div className='wrapperProduction'>
	      	<div className='floatBlock redBlock'></div>
	      	<div className='floatBlock orangeBlock'></div>
	      	<div className='floatBlock yellowBlock'></div>
	      	<div className='floatBlock purpleBlock'></div>
        <Headertop />
        <Promoblock header={['Pro', <br/>, 'du', <br/>, 'ction']} bgimage={prbg} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' buttontext='Ask a question'/>
        <Partners />
        <Quote />
        <Team />
        <Footer />
      </div> 
    );
  }
}

export default Production;
