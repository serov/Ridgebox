import React, { Component } from 'react';
import logo from './logo.png';
import './logo.css'

class Logo extends Component {
  render() {
    return (
    
                <img src={logo} className="logo" alt="Smiley face"></img>
    );
    
  }
}

export default Logo;