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
import Engineering from './engineering/engineering.js';
import Holdings from './holdings/holdings.js';
import { RouteTransition } from 'react-router-transition';


class App extends Component {



  render() {



    return (
     <Router history={browserHistory}>
      <RouteTransition pathname='/' component={VideoSplash} atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1}}></RouteTransition>
   	  <Route path='/' component={VideoSplash}></Route>
      <Route path='/start' component={Main}></Route>
      <Route path='production' component={Production}></Route>
      <Route path='engineering' component={Engineering}></Route>
      <Route path='Holdings' component={Holdings}></Route>
     </Router>
    );
  }
}

export default App;


