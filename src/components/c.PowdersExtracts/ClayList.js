import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ClayMenu from './ClayMenu';

export default class ClayList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "CLAY";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ClayMenu key={product.id} clayItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}