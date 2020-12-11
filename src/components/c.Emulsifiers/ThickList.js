import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ThickMenu from './ThickMenu';

export default class ThickList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "THICKNER";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ThickMenu key={product.id} ThickItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}