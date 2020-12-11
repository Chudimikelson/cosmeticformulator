import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import HumecMenu from './HumecMenu';

export default class HumecList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "HUMECTANT";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <HumecMenu key={product.id} HumecItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}