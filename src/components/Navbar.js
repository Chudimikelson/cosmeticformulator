import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../camden-grey-logo_2.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { MDBNavbar, MDBBtn, MDBBtnGroup, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBCol } from "mdbreact";

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bbn d-flex justify-content-between">
            <p>important information to note</p>
          <MDBNavbar>
          <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="instagram" />
              </MDBNavLink>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="whatsapp" />
              </MDBNavLink>
          </MDBNavbar>
            </div>
            <div className="container-fluid d-flex justify-content-between">
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
    <MDBNavbar>
           <MDBNavLink to="/checkout" id="cartbtn" >
           <span className="small"><i className="mr-2 fas fa-shopping-cart" /></span>N 0.00
           <span className="pl-2">Checkout</span>
          </MDBNavLink>
          </MDBNavbar>
            </div>
        <NavWrapper className="d-md-none container fixed">
          <div className="row justify-content-between">
            <Sidebar className="col-3"/>
            <Link className="col-8" to='/'>
              <img className="mylogo img-fluid"src={logo} alt="Etoile Beauty Nigeria"/>
            </Link>
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
`