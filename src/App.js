import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Grid, Col, Modal } from 'react-bootstrap';
import Logo from "./logo/logo.js";
import Header from "./header/header.js";
import Menu from "./menu.js";
import Helloworld  from "./Helloworld.js";
import NavElement from "./nav/nav.js";
import productionIcon from './nav/img/production-icon.png';
import holdingsIcon from './nav/img/holdings-icon.png';
import engineeringIcon from './nav/img/engineering-icon.png'
import VideoSplash from './videoSplash/videoSplash.js';
import Main from './main.js';
import Production from './production/production.js';


class App extends Component {



  render() {



    return (
     <Router history={browserHistory}>
      <Route path='/' component={VideoSplash}></Route>
      <Route path='/start' component={Main}></Route>
      <Route path='engineering' component={Production}></Route>
     </Router>
    );
  }
}

export default App;


