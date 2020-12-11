import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import StabMenu from './StabMenu';

export default class StabList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "STABILIZER";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <StabMenu key={product.id} StabItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}