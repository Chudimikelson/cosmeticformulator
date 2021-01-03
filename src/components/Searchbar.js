import React from 'react'
import { MDBCol, MDBIcon } from 'mdbreact'
import { ProductConsumer } from '../Context'

export default function Searchbar() {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <MDBCol className=''>
            <div className='input-group md-form form-sm form-1'>
              <input
                onClick={() => value.openModal()}
                type='text'
                className='form-control py-md-4'
                placeholder='Search for ingredients'
                aria-label='search'
              />
              <div className='input-group-append'>
                <span className='input-group-text purple lighten-3'>
                  <MDBIcon className='text-white' icon='search' />
                </span>
              </div>
            </div>
          </MDBCol>
        )
      }}
    </ProductConsumer>
  )
}
