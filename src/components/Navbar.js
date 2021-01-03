import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../cfd.png'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import { MDBNavbar, MDBNavLink, MDBIcon, MDBCol } from 'mdbreact'
import Search from './Searchbar'

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <NavWrapper>
          <div className='bbn'>
            <div className='bbn d-flex justify-content-between mainGreen'>
              <p className='font-xs text-contrast'>
                important information to note
              </p>
              <MDBNavbar className='py-0'>
                <MDBNavLink
                  to='/'
                  className='text-contrast font-regular pr-0 mr-1'
                >
                  Connect with us
                </MDBNavLink>
                <MDBNavLink className='waves-effect waves-light pt-0' to='/'>
                  <MDBIcon fab icon='whatsapp' />
                </MDBNavLink>
                <MDBNavLink className='waves-effect waves-light pt-0' to='/'>
                  <MDBIcon fab icon='instagram' />
                </MDBNavLink>
                <MDBNavLink className='waves-effect waves-light pt-0' to='/'>
                  <MDBIcon fab icon='facebook' />
                </MDBNavLink>
                <MDBNavLink className='waves-effect waves-light pt-0' to='/'>
                  <MDBIcon fab icon='twitter' />
                </MDBNavLink>
                <MDBNavLink className='waves-effect waves-light pt-0' to='/'>
                  <MDBIcon fab icon='telegram' />
                </MDBNavLink>
                <hr />
                <MDBNavLink to='/' className='text-contrast font-regular'>
                  Chat Us
                </MDBNavLink>
              </MDBNavbar>
            </div>
          </div>
          <div className='bbn'>
            <div className='container-fluid d-flex justify-content-between pt-3'>
              <MDBCol md='3'>
                <NavLink to='/'>
                  <img src={logo} alt='cosmetic formulator' />
                </NavLink>
              </MDBCol>
              <MDBCol md='7' className='my-auto'>
                <Search />
              </MDBCol>
              <MDBCol md='2' className='my-auto'>
                <MDBNavLink to='/checkout'>
                  <span className='cartbtn mr-2'>
                    <i className='fas fa-shopping-cart align-bottom' />
                  </span>

                  <span className='checkout-btn'>CART</span>
                </MDBNavLink>
              </MDBCol>
            </div>
          </div>
          <div className='d-md-none py-3'>
            <div className='d-flex justify-content-between'>
              <div className='col-3'>
                <Sidebar />
              </div>
              <Link className='col-6' to='/'>
                <img
                  className='mylogo img-fluid'
                  src={logo}
                  alt='Etoile Beauty Nigeria'
                />
              </Link>
              <MDBNavbar className='text-right col-3'>
                <MDBNavLink to='/checkout' style={{ color: 'black' }}>
                  <span className='font-l'>
                    <i
                      className='mr-2 fas fa-shopping-cart'
                      style={{ color: '#56ab2f' }}
                    />
                  </span>
                </MDBNavLink>
              </MDBNavbar>
            </div>
            <Search />
          </div>
        </NavWrapper>
      </React.Fragment>
    )
  }
}

const NavWrapper = styled.nav`
  img {
    max-height: 112px;
  }

  .checkout-btn {
    background: linear-gradient(40deg, #ffd86f, #fc6262);
    border-radius: 1rem;
    font-size: 1rem;
    color: #fff;
    padding: 0.4rem 2rem;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.18),
      0 2px 12px 0 rgba(0, 0, 0, 0.15);
  }

  .cartbtn {
    padding: 0.5rem 0.7rem;
  }
  .cartbtn i {
    font-size: 1.8rem;
    color: #56ab2f;
  }
  hr {
    transform: rotate(90deg);
    width: 1rem;
    background: white;
  }
  input.form-control,
  span.input-group-text {
    border: 1px solid #90ee90;
  }
  span.input-group-text {
    background: #90ee90;
  }
  .mylogo {
    max-height: 60px;
    width: 100%;
  }
`
