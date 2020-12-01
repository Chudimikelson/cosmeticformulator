import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import EssOilMenu from './EssOilMenu';

export default class EssOilList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ESSENTIAL OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <EssOilMenu key={product.id} EssOilItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}