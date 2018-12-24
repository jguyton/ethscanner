//import react
import React from 'react';
//components
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';


export default class Header extends React.Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }
  }



  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" style={{textTransform: 'uppercase', fontSize: 16, letterSpacing: 4}}>
              Airswap Coding Challenge
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://etherscan.io">
            etherscan.io
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
