import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from 'react-bootstrap';
import {BrowserRouter as Router, Route, NavLink, Link, Switch, Prompt} from 'react-router-dom';


class Page3side2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      addingstuff : false
    }
  }

  handleSubmit(e){
    e.preventDefault();
    var handleAdd = this.props.handleAdd;
    var text = this.refs.content.value;
    handleAdd(text);
    this.refs.content.value = ''
    this.toggle()
  }
  toggle(){
    this.state.addingstuff = !this.state.addingstuff;
    this.setState(this.state)
  }

  render() {
    if(this.state.addingstuff)
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="write me ..." ref="content"></input>
          <button> Add </button>
        </form>
        )

    else
      return(
        <button onClick={this.toggle.bind(this)}> show/hide</button>
      )
    }
  }

export default Page3side2;
