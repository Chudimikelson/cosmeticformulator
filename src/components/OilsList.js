import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../Context';
import OilsMenu from './OilsMenu';
import PropTypes from "prop-types";
import styled from 'styled-components';

export default class OilsList extends Component {
  render (){
    
  return (
    <Liststyle><nav className="nav flex-md-column nav-pills nav-fill"><MDBListGroup>
      <MDBListGroupItem active disabled className='list-of-items text-center lead'>LIST OF OILS</MDBListGroupItem>
    <ProductConsumer>
              {value => {
                return value.oilsList.map( oilsItem => {
                  return <MDBListGroupItem className="nav-item text-left nav-link py-3 my-2 lead"><OilsMenu key={oilsItem.id} oilsItem={oilsItem}/></MDBListGroupItem>;
                });
              }}
        </ProductConsumer>
      </MDBListGroup></nav>
      </Liststyle>
  )
}
}
OilsList.propTypes = {
  oilsItem: PropTypes.shape({
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

