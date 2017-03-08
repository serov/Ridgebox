import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Col, Modal } from 'react-bootstrap';
import './App.css';
import Logo from "./logo/logo.js";
import Header from "./header/header.js";
import Menu from "./menu.js";
import NavElement from "./nav/nav.js";
import productionIcon from './nav/img/production-icon.png';
import holdingsIcon from './nav/img/holdings-icon.png';
import engineeringIcon from './nav/img/engineering-icon.png'
import VideoSplash from './videoSplash/videoSplash.js'


class Main extends Component {



  render() {



    return (
      <div className='wrapperBody'>

      <Grid>
      
        <Col md={12} className="text-center" > <Logo /> </Col>
        <Col md={12} className="text-center" > <Header /> </Col>
      

      <Grid id="footer">

        <Col md={4}><NavElement color='yellow' header='Production' lead='Design, branding & media.' image={productionIcon}/></Col>
        <Col md={4}><NavElement color='orange' header='Engineering' lead='Technology & web development' image={holdingsIcon}/></Col>
        <Col md={4}><NavElement color='purple' header='Holdings' lead='Partnership & products' image={engineeringIcon}/></Col>
      
       </Grid> 

       </Grid>
      </div> 
    );
  }
}

export default Main;
