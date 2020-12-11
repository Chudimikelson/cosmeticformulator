import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import BaseMenu from './BaseMenu';

export default class BaseList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "SOAP BASE";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <BaseMenu key={product.id} BaseItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}