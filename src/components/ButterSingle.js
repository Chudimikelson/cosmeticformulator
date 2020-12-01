import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Menubar from './Menubar';
import Breadcrumb  from './Breadcrumbs';
import ButtersList from './ButtersList';
import Tabs from './Tabs';
import Sizes from './Sizes';

export default class Oils extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, contains, price, title,inCart, count,increment,decrement} = value.butterDetail;
          return (
            <>
            <div className="bbn"><Menubar/></div>  
            <div className="container-fluid">
              <Breadcrumb title={title}/>
            </div>
            <div className="container-fluid d-flex">
              <div className="col-md-3 bbn">
                <ButtersList/>
              </div>
              <div className="col-12 col-md-9">
                <div className="row">
                  <h2 className="page-title font-weight-bold col-12">{title}</h2>
                  <div className="col-12 col-md-6">
                    <div className="container"><img src={img} className="collection-image" alt="product"/></div>
                  </div>
                  <div className="col-12 col-md-6">
                    <Sizes/>
                    <div className="row">
                      <div className="col-12 col-md-6">Quantity:
                      <div className="d-flex def-number-input number-input">
                      <span className="input-group-text btn btn-black" onClick={()=>decrement(id)} ><i className="fas fa-minus"></i></span>
                      <input type="text" className="form-control" disabled placeholder= {count} aria-label="count" aria-describedby="basic-addon" />
                      <span className="input-group-text btn-black" onClick={()=>increment(id)} ><i className="fas fa-plus"></i></span>
                      </div>
                      </div>
                      <div className="col-12 col-md-6">Price:
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon">
                            <i className="">&#8358;</i>
                          </span>
                        </div>
                        <input type="text" className="form-control" disabled placeholder= {price} aria-label="Username" aria-describedby="basic-addon" />
                      </div>
                      </div>
                    </div>
                  <button className="cart-btn text-center text-tit py-0 px-0 my-2" disabled={inCart? true : false}
                      onClick={()=> { value.addBsToCart(id);}} > 
                      {inCart? (
                      <p className="mx-auto ic text-capitalize text-center py-2 mb-0" disabled>Item added</p> ) : (
                      <p className= "py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="row page-title">
                  <Tabs description={description} usage={usage} contains={contains}/>
                </div>
              </div>
            </div>
            </>
          )
        }}
      </ProductConsumer>
    )
  }
}
