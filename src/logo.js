import React, { Component } from 'react';
import logo from './logo.png'

class Logo extends Component {
  render() {
    return (
    <div class="col-md-12 col-sm-12 text-center">
                <img src={logo} alt="Smiley face"></img>
            </div>
    );
    
  }
}

export default Logo;