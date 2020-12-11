import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import WaxMenu from './WaxMenu';

export default class WaxList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "WAX";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <WaxMenu key={product.id} WaxItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}