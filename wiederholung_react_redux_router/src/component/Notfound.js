import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';

class Notfound extends Component {
  render() {
    return (
      <h1> Not found s here </h1>
    );
  }
}

export default Notfound;
