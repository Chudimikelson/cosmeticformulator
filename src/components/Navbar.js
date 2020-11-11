import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '../cfd.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { MDBNavbar,  MDBNavLink, MDBIcon, MDBCol } from "mdbreact";
import MobileMenu from './MobileMenu';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <div className="bbn">
            <div className="bbn d-flex justify-content-between" id="topRibbon">
              <p className="font-xs text-contrast">important information to note</p>
              <MDBNavbar className="py-0">
                <MDBNavLink className="text-contrast font-regular pr-0 mr-1">Connect with us</MDBNavLink>
                <MDBNavLink className="waves-effect waves-light pt-0" to="#!">
                  <MDBIcon fab icon="whatsapp" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light pt-0" to="#!">
                  <MDBIcon fab icon="instagram" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light pt-0" to="#!">
                  <MDBIcon fab icon="facebook" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light pt-0" to="#!">
                    <MDBIcon fab icon="twitter" /></MDBNavLink>
                <MDBNavLink className="waves-effect waves-light pt-0" to="#!">
                  <MDBIcon fab icon="telegram" /></MDBNavLink><hr/>
                <MDBNavLink className="text-contrast font-regular">Chat Us</MDBNavLink>
              </MDBNavbar>
            </div>
          </div>
          <div className="bbn">
            <div className="container-fluid d-flex justify-content-between pt-3">
              <MDBCol md="3"><NavLink to = '/'>
              <img src={logo} alt="cosmetic formulator"/></NavLink>
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
                <MDBNavLink to="/checkout" style={{"color":"black"}}>
                  <span className="font-xs"><i className="mr-2 fas fa-shopping-cart" />Cart Empty</span><br/>
                  <span className="small">CHECKOUT</span>
                </MDBNavLink>
              </MDBNavbar>
            </div>
          </div>
          <div className="d-md-none">
          <div className="d-flex justify-content-between">
            <MDBNavbar className="col-2"></MDBNavbar>
            <Link className="col-7" to='/'>
              <img className="mylogo img-fluid"src={logo} alt="Etoile Beauty Nigeria"/>
            </Link>
            <MDBNavbar className="text-right col-3">
                <MDBNavLink to="/checkout" style={{"color":"black"}}>
                  <span className="font-xs"><i className="mr-2 fas fa-shopping-cart" /></span><br/>
                  <span className="font-xs">N0.00</span>
                </MDBNavLink>
              </MDBNavbar>
          </div>
          </div>
        </NavWrapper>
      </React.Fragment>
    );
  }
}

const NavWrapper = styled.nav`
img  {
  max-height: 112px;
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
input.form-control, span.input-group-text {
  border: 1px solid #90ee90;
}
span.input-group-text {
  background : #90ee90;
}
`