import React, { Component } from "react";
import styled from 'styled-components';
import { MDBNavbar, MDBDropdown,MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import {ProductConsumer} from '../Context';
import ButtersMenu from "./c.OilsAndButters/ButtersMenu";
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
        <MDBDropdownToggle caret color="default" className="lead categories">BUTTERS & WAXES
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
        <MDBDropdownToggle caret color="default" className="lead categories">OILS</MDBDropdownToggle>
        <MDBDropdownMenu color="danger" className="dropdown dropright">
          <div className="row">
            <div class="col-md-4">
              <p class="dropdown-heading bold mt-0 pt-0">Carrier Oils</p>
              <ProductConsumer>
              {value => {
                return value.oilsList.map( oilsItem => {
                  return <OilsMenu key={oilsItem.id} oilsItem={oilsItem}/>;
                });
              }}
        </ProductConsumer>
            </div>
            <div class="col-md-4">
              
                <p class="dropdown-heading bold mt-0 pt-0">Essential Oils</p><button class="dropdown-item">Lavender Oil</button> <button class="dropdown-item">Orange</button> <button class="dropdown-item">Lemon</button>
             </div>
            <div class="col-md-4">
              
                <p class="dropdown-heading bold mt-0 pt-0">Fragrance Oils</p><button class="dropdown-item">Frankincense</button> <button class="dropdown-item">Rose Bouquet</button> <button class="dropdown-item">Vanilla</button>
             </div>
            </div>
        </MDBDropdownMenu>
      </MDBDropdown><hr/>
      <MDBDropdown>
        <MDBDropdownToggle caret color= "white" className="lead categories">ADDITIVES</MDBDropdownToggle>
        <MDBDropdownMenu color="white">
          <MDBDropdownItem>CLAYS</MDBDropdownItem>
          <MDBDropdownItem>POWDERS</MDBDropdownItem>
          <MDBDropdownItem>PLANT EXTRACTTS</MDBDropdownItem>
          <MDBDropdownItem>HYDROSOLS</MDBDropdownItem>
          <MDBDropdownItem>SOLVENTS</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown> <hr/>
      <MDBDropdown>
      <MDBDropdownToggle color="default" className="lead categories">SURFACTANTS</MDBDropdownToggle>
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
          <MDBDropdownToggle color="default" caret className="lead categories">ACTIVES
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown-default">
            <MDBDropdownItem >Body</MDBDropdownItem>
            <MDBDropdownItem >Face</MDBDropdownItem>
            <MDBDropdownItem >Kids</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown> <hr/>
        <MDBDropdown>
          <MDBDropdownToggle color="default" caret className="lead categories"><span className="px-1">PRESERVATIVES</span>
          </MDBDropdownToggle>
          <MDBDropdownMenu className="dropdown dropleft">
            <MDBDropdownItem >Customer Care</MDBDropdownItem>
            <MDBDropdownItem >Shipping Information</MDBDropdownItem>
            <MDBDropdownItem >Return Policy</MDBDropdownItem>
            <MDBDropdownItem >FAQ</MDBDropdownItem>
            <MDBDropdownItem >About</MDBDropdownItem>
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

hr {
  transform: rotate(90deg);
  width: 1rem;
  background: green;
}
.dropdown button:hover {
  background-color: #90ee90;
  border-bottom: solid 1px #008000;
  border-radius: 2px;
}
.btn:focus {
  outline:none;
  box-shadow: none;
}
.dropdown-menu {
  width: max-content;
}
.dropdown-heading {
  padding-left: 24px;
}
.dropdown-item a {
  text-decoration: none;
  color: #4caf50;
}
.dropdown-item a:hover{
  color: #fff;
}
.categories {
  color: #4CAF50;
  font-weight: bold;
}
`