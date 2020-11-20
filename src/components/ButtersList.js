import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../Context';
import ButtersMenu from './ButtersMenu';
import PropTypes from "prop-types";
import styled from 'styled-components';

export default class ButtersList extends Component {
  render (){
    
  return (
    <Liststyle><nav className="nav flex-md-column nav-pills nav-fill"><MDBListGroup> 
      <MDBListGroupItem active disabled className='list-of-items lead text-center'>LIST OF BUTTERS</MDBListGroupItem>
    <ProductConsumer>
              {value => {
                return value.buttersList.map( buttersItem => {
                  return <MDBListGroupItem  className="nav-item text-left nav-link py-3 my-2 lead"><ButtersMenu key={buttersItem.id} buttersItem={buttersItem}/></MDBListGroupItem>;
                });
              }}
        </ProductConsumer>
      </MDBListGroup></nav>
      </Liststyle>
  )
}
}
ButtersList.propTypes = {
  buttersItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

const Liststyle = styled.div`
a {
  text-decoration: none;
}
.nav-item:hover, .dropdown-item:hover {
  background-color: #32ae1b;
  color: #fff;
}
`

