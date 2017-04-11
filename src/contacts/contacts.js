import React, { Component } from 'react';
import StyledMapExample from './googlemap.js'
import Form from './form.js'
import './contacts.css';
import { Grid, Col, Row } from 'react-bootstrap'


class Contacts extends Component {

  

  render() {

    return(
    <div className='wrapperContacts'>
		
		<StyledMapExample />
		<Form/>
	    
    </div>

    )
    }

}

export default Contacts;