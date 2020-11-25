import React, { Component } from 'react';
import { MDBDropdownItem, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ButtersMenu from './ButtersMenu';
import PropTypes from "prop-types";
import styled from 'styled-components';

export default class ButtersList extends Component {
  render (){
    
  return (
    <Liststyle> 
    <ProductConsumer>
              {value => {
                return value.buttersList.map( buttersItem => {
                  return <MDBDropdownItem className="shadow-hover"><ButtersMenu key={buttersItem.id} buttersItem={buttersItem}/></MDBDropdownItem>;
                });
              }}
        </ProductConsumer>
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
`

