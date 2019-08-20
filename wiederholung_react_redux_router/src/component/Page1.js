import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';

class Page1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 0
    }
  }

  click(){
    this.setState({
      number : this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <h3> onClick event exercise </h3>
        <p> Hello <button onClick={this.click.bind(this)}>{this.state.number}</button></p>
      </div>
    );
  }
}

export default Page1;
