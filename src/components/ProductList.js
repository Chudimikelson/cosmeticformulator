import React, { Component } from 'react'
import Products from './Products';
import {ProductConsumer} from '../Context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-2">
          <div className="container-fluid mx-auto paddit">
            <h1 className="text-center page-title">Etoile Beauty Products</h1>        
            <div className="flex-containerz row">
              <ProductConsumer>
                {value => {
                  return value.products.filter(product => {
                    return product.category === "BUTTERS";
                  }).map( product => {
                    return <Products key={product.id} product={product}/>;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
