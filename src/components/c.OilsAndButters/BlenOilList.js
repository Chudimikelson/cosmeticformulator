import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import BlenOilMenu from './EssOilMenu';

export default class BlenOilList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "BLENDED OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <BlenOilMenu key={product.id} BlenOilItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}