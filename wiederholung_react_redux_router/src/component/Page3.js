import React, { Component } from 'react';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';
import Page3side1 from './Page3side1.js';
import Page3side2 from './Page3side2.js';
import './style.css';


class Page3 extends Component {
  handleDelete(id){
    this.state.mang.splice(id,1);
    this.setState(this.state)
  }
  handleAdd(text){
    this.state.mang.push(text);
    this.setState(this.state)
  }

  constructor(props){
    super(props);
    this.state = {
      mang : ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
    }
  }
  render() {
    return (
      <div>
      <h3> Redux Training exercise </h3>
        <div className="wrapper">
        <Page3side2 handleAdd={this.handleAdd.bind(this)}></Page3side2>
         {this.state.mang.map((items,index)=>{
           return ( <Page3side1 key={index} id={index} handleDelete={this.handleDelete.bind(this)}>{items}</Page3side1> )
            }
         )}
        </div>
      </div>
    );
  }
}

export default Page3;
