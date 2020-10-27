import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../camden-grey-logo_2.png';
import styled from 'styled-components';
import Sidebar from './Sidebar';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bbn fixed"></div>
        <NavWrapper className="container fixed">
          <div className="row justify-content-between">
            <Sidebar className="col-3"/>
            <Link className="col-8" to='/'>
              <img className="mylogo img-fluid"src={logo} alt="Etoile Beauty Nigeria"/>
            </Link>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn">
              <i className="fas fa-shopping-cart"/>
              <span className="">N0.00</span>
            </button>
            <Link to="/checkout">
              <button className="btn-primary">CHECKOUT</button>
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