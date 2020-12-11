import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import SolubsMenu from './SolubsMenu';

export default class SolubsList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "SOLUBILIZER";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <SolubsMenu key={product.id} SolubItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}