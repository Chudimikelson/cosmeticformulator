import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../Context';
import ButtersMenu from './ButtersMenu';
import PropTypes from "prop-types";
import styled from 'styled-components';

export default class ButtersList extends Component {
  render (){
    
  return (
    <Liststyle><MDBListGroup>
      <MDBListGroupItem active disabled className='list-of-items lead text-center'>LIST OF BUTTERS</MDBListGroupItem>
    <ProductConsumer>
              {value => {
                return value.buttersList.map( buttersItem => {
                  return <MDBListGroupItem hover><ButtersMenu key={buttersItem.id} buttersItem={buttersItem}/></MDBListGroupItem>;
                });
              }}
        </ProductConsumer>
      </MDBListGroup>
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
`

