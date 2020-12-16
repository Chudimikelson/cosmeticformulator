import React from 'react'
import ActivsCategory from './ActivsCategory';
import { ProductConsumer } from "../Context";

export default function AllActivs() {
  return (
    <>
    <div className="container d-flex flex-wrap">
    <ProductConsumer>
      {value => {
        return value.products.filter(product => {
          return product.category === "ACTIVE";
        }).map( product => {
          return <ActivsCategory key={product.id} activsCategory={product}/>;
        });
      }}
    </ProductConsumer></div></>
  )
}