import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ActivMenu from './ActivMenu';

export default class ActivList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ACTIVE";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ActivMenu key={product.id} activItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}