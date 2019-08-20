import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';

class Page2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      number : 1
    }
  }

  prev(){
    this.setState({
      number : this.state.number == 1 ? 1 : this.state.number - 1
    })
  }
  next(){
      number : this.state.number == 3 ? 3 : this.state.number + 1
  }

  render() {
    return (
      <div>
        <h3> Images changing exercise </h3>
        <img src="images/1.jpg"></img>
        <hr></hr>
        <button onClick={this.prev.bind(this)}> prev</button>
        <button onClick={this.next.bind(this)}> next</button>
      </div>
    )
  }
}

export default Page2;
