import React, { Component } from 'react';
import {ProductConsumer} from '../../Context';
import {Link} from 'react-router-dom';
import SuperMenu  from '../SuperMenu';
import Tabs from '../Tabs';
import Sizes from '../Sizes';
import Featured from '../Featured';
import SubmenuStabilizers from './SubmenuStabilizers';

export default class EmulStabilizers extends Component {
    
  render() {
    return (
      <>
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, contains,count, price, title,inCart, mini, regular, large} = value.detailProduct;
          return (
            <div className="container-fluid">
            <div className="bbn"><SuperMenu/></div>
            <section className="section bg-contrast">
              <div className="rounded shadow container-fluid border py-4">
                <div className="row">
                  <div className="col-12 col-md-3 bbn">
                    <SubmenuStabilizers/>
                </div>
                  <div className="col-12 col-md-6">
                    <div className="row justify-content-between">
                      <h2 className="page-title font-weight-bold col-12">{title}</h2>
                      <img src={img} className="col-md-6 img-fluid collection-image border-md rounded shadow" alt="product"/>
                      <div className="col-md-5">
                        <div className="row pt-4 pt-md-0">
                          <Sizes mini={mini} regular={regular} large={large}/>
                          <div className="col-12 col-md-6 pt-md-4">Quantity:
      <div className="d-flex def-number-input number-input">
        <input type="text" className="form-control mx-2" disabled placeholder= {count} aria-label="count" aria-describedby="basic-addon" />
      </div>
    </div>
                          <div className="col-12 col-md-6 pt-md-4">Price:
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                  <i className="">&#8358;</i>
                                </span>
                              </div>
                              <input type="text" className="form-control" disabled placeholder= {price} aria-label="Username" aria-describedby="basic-addon" />
                            </div>
                          </div>
                          <button className="cart-btn text-center text-tit py-0 px-0 mt-4"
                            disabled={inCart? true : false}
                            onClick={()=> {
                              value.addToCart(id);
                            }}
                            >
                              {inCart? (
                            <p className="mx-auto ic text-capitalize text-center py-2 mb-0" disabled>
                              Item added
                            </p>
                            ) : (
                            <p className= "py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                            )}
                          </button>
                          <button className="cart-btn text-center py-0 px-0 my-2" >
                            <Link to='/checkout'>
                              <p className="mx-auto py-2 btc mb-0">CHECKOUT</p>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mt-md-5 pt-md-4">
                    <Tabs description={description} usage={usage} contains={contains}/>
                  </div>
                </div>
              </div>
            </section>
            </div>
          )
        }}
      </ProductConsumer>
      <div className="mt-3 pt-4"><Featured/></div>
      </>
    )
  }
}

