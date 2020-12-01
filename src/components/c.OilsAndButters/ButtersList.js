import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ButtersMenu from './ButtersMenu';

export default class ButtersList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "BUTTERS";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ButtersMenu key={product.id} buttersItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}


