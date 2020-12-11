import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import AdjusMenu from './AdjusMenu';

export default class AdjusList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ADJUSTER";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <AdjusMenu key={product.id} AdjusItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}