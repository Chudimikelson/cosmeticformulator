import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../Context'
import { ButtonContainer } from './Button'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value

          if (!modalOpen) {
            return null
          } else {
            return (
              <ModalContainer>
                <div className='container'>
                  <div className='input-group md-form form-sm form-1'>
                    <input
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
                  <div id='modal' className='text-center text-capitalize'>
                    <h5>this is the modal</h5>
                    <ButtonContainer onClick={() => closeModal()}>
                      Close
                    </ButtonContainer>
                  </div>
                </div>
              </ModalContainer>
            )
          }
        }}
      </ProductConsumer>
    )
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 5vh;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`
