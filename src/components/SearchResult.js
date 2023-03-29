import React, { Component } from 'react'
import { ProductConsumer } from '../Context'

export default class SearchResult extends Component {
  render() {
    const { id, title } = this.props.product
    return (
      <ProductConsumer>
        {(value) => (
          <div className='card-footer' onClick={() => value.handleDetail(id)}>
            {title}
          </div>
        )}
      </ProductConsumer>
    )
  }
}
