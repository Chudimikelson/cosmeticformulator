import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import PresvMenu from './PresvMenu';

export default class PresvList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "PRESERVATIVE";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <PresvMenu key={product.id} presvItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}