import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import CarrOilMenu from './CarrOilMenu';

export default class CarrOilList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "CARRIER OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <CarrOilMenu key={product.id} CarrOilItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}
