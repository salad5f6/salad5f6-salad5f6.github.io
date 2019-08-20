import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';
import Home from './component/Home.js';
import Page1 from './component/Page1.js';
import Page2 from './component/Page2.js';
import Page3 from './component/Page3.js';
import Notfound from './component/Notfound.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"> Nothing site</h1>
        </header>
        <Router>
          <div>
              <Navbar collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <a href="#">React-Bootstrap fun and no tears</a>
                  </Navbar.Brand>
                </Navbar.Header>
                  <Nav>
                    <NavItem ><Link to="/">Home</Link></NavItem>
                    <NavItem ><Link to="/component/Page1.js">Page 1</Link></NavItem>
                    <NavItem ><Link to="/component/Page2.js">Page 2</Link></NavItem>
                    <NavItem ><Link to="/component/Page3.js">Page 3</Link></NavItem>
                  </Nav>
              </Navbar>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/component/Page1.js" component={Page1}></Route>
                <Route path="/component/Page2.js" component={Page2}></Route>
                <Route path="/component/Page3.js" component={Page3}></Route>
                <Route path="" component={Notfound}></Route>
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
