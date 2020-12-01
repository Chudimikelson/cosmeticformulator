import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import PowdersMenu from './PowdersMenu';

export default class PowdersList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ESSENTIAL OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <PowdersMenu key={product.id} PowdItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}