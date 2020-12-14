import React, { Component } from 'react';
import {ProductConsumer} from '../../Context';
import {Link} from 'react-router-dom';
import SuperMenu  from '../SuperMenu';
import Tabs from '../Tabs';
import Featured from '../Featured';
import SubmenuStabilizers from './SubmenuStabilizers';

export default class EmulStabilizers extends Component {
    
  render() {
    return (
      <>
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, contains, title,inCart, mini, regular, large} = value.detailProduct;
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
                        <div  onChange={(e)=>value.getSize(e)}className="d-flex flex-wrap">
      <div className="page-title w-100">Sizes:</div>
      <div className="card-body w-60 mx-auto rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary" >
            <input className="form-control" type="radio" id="mini" name="size" value={mini}/> <label className="control-label text-darker" htmlFor="mini">250ml</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{mini}</span></div>
        </div>
      </div>
      <div className="card-body w-50 rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div  className="radio radio-primary">
            <input className="form-control" type="radio" id="regular" name="size" value={regular}/> <label className="control-label text-darker" htmlFor="regular">500ml</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{regular}</span></div>
        </div>
      </div>
      <div className="card-body w-70 rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary">
            <input className="form-control" type="radio" id="large" name="size" value={large}/> <label className="control-label text-darker" htmlFor="large">1 litre</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{large}</span></div>
        </div>
      </div>
      <div className="card-body w-70 rounded border">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className=""> <label className="control-label text-darker" for="more">4 litres or more</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">Contact us for bulk orders</span></div>
        </div>
      </div>
    </div>
                          <div className="col-12 pt-md-4">Price:
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon">
                                  <i className="">&#8358;</i>
                                </span>
                              </div>
                              <input type="text" className="form-control" disabled placeholder= {value.selected} aria-label="Username" aria-describedby="basic-addon" />
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

