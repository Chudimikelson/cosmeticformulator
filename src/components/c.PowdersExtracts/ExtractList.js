import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ExtractMenu from './ExtractMenu';

export default class ExtractList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "EXTRACT";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ExtractMenu key={product.id} extractItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}