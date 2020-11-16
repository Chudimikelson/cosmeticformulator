import React, { Component } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { MDBNavbar, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {ProductConsumer} from '../Context';
import ButtersMenu from "./ButtersMenu";
import OilsMenu from './OilsMenu';


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
        <ProductConsumer>
              {value => {
                return value.buttersList.map( buttersItem => {
                  return <ButtersMenu key={buttersItem.id} buttersItem={buttersItem}/>;
                });
              }}
        </ProductConsumer>
        </MDBDropdownMenu>
      </MDBDropdown><hr/>
      <MDBDropdown>
        <MDBDropdownToggle caret color="default" size="sm">OILS</MDBDropdownToggle>
        <MDBDropdownMenu color="danger" className="dropdown dropright">
          <MDBDropdownItem>Carrier oils column</MDBDropdownItem>
          <MDBDropdownItem>Coconut oil</MDBDropdownItem>
          <MDBDropdownItem>Carrot oil</MDBDropdownItem>
          <MDBDropdownItem>See All</MDBDropdownItem>
          <MDBDropdownItem>Essential Oils column</MDBDropdownItem>
          <MDBDropdownItem>Orange EO</MDBDropdownItem>
          <MDBDropdownItem>Lavender EO</MDBDropdownItem>
          <MDBDropdownItem>See All</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown><hr/>
      <MDBDropdown>
        <MDBDropdownToggle caret color= "white" size="sm">Emulsifiers</MDBDropdownToggle>
        <MDBDropdownMenu color="white">
          <MDBDropdownItem>E-wax</MDBDropdownItem>
          <MDBDropdownItem>Acetyl-Alcohol</MDBDropdownItem>
          <MDBDropdownItem>Stearic</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown> <hr/>
      <MDBDropdown>
      <MDBDropdownToggle color="default" size="sm">OILS</MDBDropdownToggle>
      <MDBDropdownMenu color="danger" basic>
        <ProductConsumer>
              {value => {
                return value.oilsList.map( oilsItem => {
                  return <OilsMenu key={oilsItem.id} oilsItem={oilsItem}/>;
                });
              }}
        </ProductConsumer>
        </MDBDropdownMenu>
      </MDBDropdown> <hr/>
        <MDBDropdown>
          <MDBDropdownToggle color="default" caret size="sm">SOAPMAKING
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem href="#!">Body</MDBDropdownItem>
            <MDBDropdownItem href="#!">Face</MDBDropdownItem>
            <MDBDropdownItem href="#!">Kids</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown> <hr/>
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
background: #ffffff;
font-color: #ffffff;
.mylogo  {
  
  width: 9rem;
}
.navitem {
  font-size: 1rem;
}
hr {
  transform: rotate(90deg);
  width: 1rem;
  background: green;
}
`