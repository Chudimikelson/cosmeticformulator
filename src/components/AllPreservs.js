import React from 'react'
import PreservsCategory from './PreservsCategory';
import { ProductConsumer } from "../Context";

export default function AllPreservs() {
  return (
    <div className="container d-flex flex-wrap">
    <ProductConsumer>
      {value => {
        return value.products.filter(product => {
          return product.category === "PRESERVATIVE";
        }).map( product => {
          return <PreservsCategory key={product.id} preservsCategory={product}/>;
        });
      }}
    </ProductConsumer></div>
  )
}