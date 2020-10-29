import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../camden-grey-logo_2.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { MDBNavbar, MDBBtn, MDBBtnGroup, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol } from "mdbreact";
import { Typography } from '@material-ui/core';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <div className="bbn d-flex justify-content-between" id="topRibbon">
            <p className="font-xs text-contrast p-2">important information to note</p>
            <MDBNavbar className="py-0">
              <MDBNavLink className="text-contrast font-regular pr-0 mr-1">Connect with us</MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="whatsapp" /></MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" /></MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="facebook" /></MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" /></MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="telegram" /></MDBNavLink><hr/>
              <MDBNavLink className="text-contrast font-regular">Chat Us</MDBNavLink>
            </MDBNavbar>
          </div>
            <div className="container-fluid d-flex justify-content-between pt-3">
              <MDBCol md="3">
              <img src={logo} alt="cosmetic formulator"/>
              </MDBCol>
            <MDBCol md="4" className="my-auto">
      <div className="input-group md-form form-sm form-1">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control" type="text" placeholder="e.g. Kojic" aria-label="Search" />
      </div>
    </MDBCol>
    <MDBNavbar className="text-right">
           <MDBNavLink to="/checkout">
           <span className="font-xs"><i className="mr-2 fas fa-shopping-cart" />Cart Empty</span><br/>
           <span className="small">CHECKOUT</span>
          </MDBNavLink>
          </MDBNavbar>
            </div>
        
          <div className="d-md-none container fixed">
          <div className="row justify-content-between">
            <Sidebar className="col-3"/>
            <Link className="col-8" to='/'>
              <img className="mylogo img-fluid"src={logo} alt="Etoile Beauty Nigeria"/>
            </Link>
          </div>
          </div>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
.mylogo  {
  height: 3rem;
}
#cartbtn {
  font-size: 3rem;
}
#topRibbon {
  background: green;
}
hr {
  transform: rotate(90deg);
  width: 1rem;
  background: white;
}
`