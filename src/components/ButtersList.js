import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../Context';
import ButtersMenu from './ButtersMenu';
import PropTypes from "prop-types";

export default class ButtersList extends Component {
  render (){
    
  return (
    <><MDBListGroup>
      <MDBListGroupItem active disabled>List of Butters</MDBListGroupItem>
    <ProductConsumer>
              {value => {
                return value.buttersList.map( buttersItem => {
                  return <MDBListGroupItem hover><ButtersMenu key={buttersItem.id} buttersItem={buttersItem}/></MDBListGroupItem>;
                });
              }}
        </ProductConsumer>
      </MDBListGroup>
      </>
  )
}
}
ButtersList.propTypes = {
  buttersItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

