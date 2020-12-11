import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import ExfoMenu from './ExfoMenu';

export default class ExfoList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "EXFOLIANT";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <ExfoMenu key={product.id} exfoItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}