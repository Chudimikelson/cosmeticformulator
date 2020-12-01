import React, { Component } from 'react';
import { MDBDropdownItem} from "mdbreact";
import {ProductConsumer} from '../../Context.js';
import FragOilMenu from './EssOilMenu';

export default class FragOilList extends Component {
  render (){
    
    return ( 
        <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.category === "FRAGRANCE OIL";
            }).map( product => {
              return <MDBDropdownItem className="shadow-hover">
                <FragOilMenu key={product.id} FragOilItem={product}/>
                </MDBDropdownItem>;
            });
          }}
        </ProductConsumer>
    )
  }
}