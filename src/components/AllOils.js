import React from 'react'
import OilsCategory from './OilsCategory';
import { ProductConsumer } from "../Context";

export default function AllOils() {
  return (
    <div className="container d-flex flex-wrap">
    <ProductConsumer>
      {value => {
        return value.products.filter(product => {
          return product.category === "BUTTER";
        }).map( product => {
          return <OilsCategory key={product.id} oilsCategory={product}/>;
        });
      }}
    </ProductConsumer></div>
  )
}


