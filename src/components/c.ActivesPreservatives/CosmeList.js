import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import CosmeMenu from './CosmeMenu';

export default class CosmeList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "BUTTERS";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <CosmeMenu key={product.id} cosmeItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}