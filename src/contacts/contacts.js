import React, { Component } from 'react';
import StyledMapExample from './googlemap.js'
import Form from './form.js'
import './contacts.css';
import { Grid, Col, Row } from 'react-bootstrap'


class Contacts extends Component {

  

  render() {

    return(
    <div className='wrapperContacts'>
		<Form/>
		<StyledMapExample />
	    
    </div>

    )
    }

}

export default Contacts;