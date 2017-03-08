import React, { Component } from 'react';
import './nav.css';
import { Link } from 'react-router';
import classNames from 'classnames';
import productionIcon from './img/production-icon.png';
import holdingsIcon from './img/holdings-icon.png';
import engineeringIcon from './img/engineering-icon.png'

class NavElement extends Component {
	constructor
  render() {

  	var floatLeft = {
  		float: 'left',
  	}

    return (
    		
     <div id='footer'>
     <Link className='nav' to='engineering'>
     	<div className={classNames('full2', 'menu-item', this.props.color)}>
     			<div style={floatLeft}><p className='ridgebox'>Ridgebox</p>
	     			<p className='menu-accent'>{this.props.header}</p>
	     			<small>{this.props.lead}</small>
     			</div>
     			<div>
     				<img className="pull-right" width="100px;" src={this.props.image}
     					/>
     			</div>
     	</div>
      </Link>
     </div>  
    )    
  }
}

export default NavElement;