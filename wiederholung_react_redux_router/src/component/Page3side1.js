import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';


class Page3side1 extends Component {
  delete(){
    var handleDelete = this.props.handleDelete;
    var id = this.props.id;
    handleDelete(id);
    this.setState(this.state)
  }

  render() {
    return (
      <div>
        <h4> {this.props.children} </h4>
        <button onClick={this.delete.bind(this)}> Delete </button>
      </div>
    );
  }
}

export default Page3side1;
