import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../logooo.png';
import styled from 'styled-components';
import { MDBNavbar, MDBBtn, MDBBtnGroup, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <NavWrapper className="container-fluid">
      <MDBNavbar color="default-color" dark expand="md">
      <MDBDropdown >
        <MDBDropdownToggle caret color="default" size="sm">
          BUTTERS
        </MDBDropdownToggle>
        <MDBDropdownMenu color="danger" basic>
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown>
        <MDBDropdownToggle caret color="default" size="sm">OILS</MDBDropdownToggle>
        <MDBDropdownMenu color="danger" className="dropdown dropright">
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdown>
        <MDBDropdownToggle caret color= "white" size="sm">BUTTERS</MDBDropdownToggle>
        <MDBDropdownMenu color="white">
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
      <MDBDropdownToggle color="default" size="sm">OILS
      </MDBDropdownToggle>
        <MDBDropdown>
          <MDBDropdownToggle color="default" caret size="sm">SOAPMAKING
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">Body</MDBDropdownItem>
            <MDBDropdownItem href="#!">Face</MDBDropdownItem>
            <MDBDropdownItem href="#!">Kids</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
        <MDBDropdown>
          <MDBDropdownToggle color="default" caret size="sm"><span className="px-1">BASES</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown dropleft">
            <MDBDropdownItem href="#!">Customer Care</MDBDropdownItem>
            <MDBDropdownItem href="#!">Shipping Information</MDBDropdownItem>
            <MDBDropdownItem href="#!">Return Policy</MDBDropdownItem>
            <MDBDropdownItem href="#!">FAQ</MDBDropdownItem>
            <MDBDropdownItem href="#!">About</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>
          
        
      </MDBNavbar>
      </NavWrapper>
    );
  }
}


export default NavbarPage;

const NavWrapper = styled.nav`
background: #72be44;
font-color: #ffffff;
.mylogo  {
  
  width: 9rem;
}
.navitem {
  font-size: 1rem;
}
`