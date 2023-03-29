import React, { Component } from 'react'
import searchResult from './SearchResult'
import { ProductConsumer } from '../Context'

export default class SearchResults extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return value.products
            .filter((product) => {
              return product.category === 'BUTTER'
            })
            .map((product) => {
              return (
                <div
                  key={product.id}
                  className='input-group'
                  onClick={() => value.handleDetail(product.id)}
                >
                  {product.title}
                </div>
              )
            })
        }}
      </ProductConsumer>
    )
  }
}
