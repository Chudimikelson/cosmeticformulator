import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem} from "mdbreact";
import {ProductConsumer} from '../Context';
import OilsMenu from './OilsMenu';
import PropTypes from "prop-types";
import styled from 'styled-components';

export default class OilsList extends Component {
  render (){
    
  return (
    <Liststyle><MDBListGroup>
      <MDBListGroupItem active disabled className='list-of-items text-center lead'>LIST OF OILS</MDBListGroupItem>
    <ProductConsumer>
              {value => {
                return value.oilsList.map( oilsItem => {
                  return <MDBListGroupItem hover><OilsMenu key={oilsItem.id} oilsItem={oilsItem}/></MDBListGroupItem>;
                });
              }}
        </ProductConsumer>
      </MDBListGroup>
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
`

