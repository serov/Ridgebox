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
          <li className='header-footer-li'><Link className='header-footer-a' to='/start'>Home</Link></li>
          <li className='header-footer-li'><Link className='header-footer-a' to='/production'>Production</Link></li>
          <li className='header-footer-li'><Link className='header-footer-a' to='/engineering'>Engineering</Link></li>
          <li className='header-footer-li'><Link className='header-footer-a' to='/Holdings'>Holdings</Link></li>
        </ul>
     </Col>
     <div className='floatBlockFooter'></div>
     </div>
     </Grid>

              
    )    
  }
}

export default Headertop;