import React, { Component } from 'react';
import './footer.css';
import { Grid, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames';

class Headertop extends Component {

  render() {

    return (

     <Grid >
     <div id='header'>
     <Col className='' xs={12} md={4}><table className='copyright'>
          <tr>
            <th className='copyrightsign'>©</th>
            <th>Ridgebox LTD 2017</th>
          </tr>
          <tr>
            <td></td>
            <td>All Rights Reserved</td>
          </tr>
        </table>
        </Col>
     <Col className='text-center' xs={12} md={8}>
        <ul className='navFooter' >
          <li><Link className='footerNav' to='/start'>Home</Link></li>
          <li><Link className='footerNav' to='/production'>Production</Link></li>
          <li><Link className='footerNav' to='/engineering'>Engineering</Link></li>
          <li><Link className='footerNav' to='/Holdings'>Holdings</Link></li>
        </ul>
     </Col>
     <div className='floatBlockFooter'></div>
     </div>
     </Grid>

              
    )    
  }
}

export default Headertop;