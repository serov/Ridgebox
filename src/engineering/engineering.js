import React, { Component } from 'react';
import { Grid, Col, Modal } from 'react-bootstrap';
import './engineering.css';
import Headertop from '.././headertop/headertop.js';
import Howdowework from './howdowework/howdowework.js';
import Promoblockeng from '.././promoblockeng/promoblockeng.js';
import Srate from './s-rate/s-rate.js';
import Graphs from './graphs/graphs.js';
import Contacts from '.././contacts/contacts.js'
import Footer from '.././footer/footer.js';
import pricon from '.././promoblock/img/pricon.png';
import engbg from '.././promoblock/img/engbg.jpg';



class Engineering extends Component {



  render() {



    return (
      <div className='wrapperEngineering'>
      	<div className='floatBlock redBlock'></div>
	      	<div className='floatBlock orangeBlock'></div>
	      	<div className='floatBlock yellowBlock'></div>
	      	<div className='floatBlock purpleBlock'></div>
        <Headertop />
        <Promoblockeng header={['engi', <br/>, 'nee', <br/>, 'ring']} bgimage={engbg} description='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' buttontext='Ask a question'/>
        <Howdowework />
        <Graphs />
        <Srate />
        <Contacts />
        <Footer />
      </div> 
    );
  }
}

export default Engineering;
