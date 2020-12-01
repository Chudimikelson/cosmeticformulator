import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import SurfactantsMenu from './SurfactantsMenu';

export default class SurfactantsList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "ESSENTIAL OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <SurfactantsMenu key={product.id} SurfItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}