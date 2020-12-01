import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import EmulsifiersMenu from './EmulsifiersMenu';

export default class EmulsifiersList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ESSENTIAL OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <EmulsifiersMenu key={product.id} EmulItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}