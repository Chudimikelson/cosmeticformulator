import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import HydrosolsMenu from './HydrosolsMenu';

export default class HydroList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "HYDROSOL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <HydrosolsMenu key={product.id} HydroItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}