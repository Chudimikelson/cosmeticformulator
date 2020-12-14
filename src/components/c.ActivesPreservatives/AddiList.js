import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import AddiMenu from './AddiMenu';

export default class AddiList extends Component {
  render (){
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ADDITIVE";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <AddiMenu key={product.id} addiItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}