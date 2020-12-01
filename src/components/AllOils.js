import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import Menubar from './Menubar';
import Breadcrumb  from './Breadcrumbs';
import OilsList from './OilsList';
import Tabs from './Tabs';
import Sizes from './Sizes';
import Featured from './Featured';

export default class AllOils extends Component {
  render() {
    return (
      <>
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, contains, price, title,inCart, count,increment,decrement, category,mini,regular,large} = value.oilDetail;
          return (
            <>
            <div className="bbn"><Menubar/></div>  
            <div className="container-fluid">
              <Breadcrumb title={title} category={category}/>
            </div>
            <section className="section  bg-contrast container-fluid ">
            <div className="rounded shadow container-fluid border py-4"><div className="row">
              <div className="col-md-3 bbn">
                <OilsList/>
              </div>
              <div className="col-12 col-md-8">
                <div class="swiper-container">
                  <div className="swiper-wrapper"><h2 className="page-title font-weight-bold col-12">{title}</h2>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <img src={img} className="img-fluid collection-image border rounded shadow" alt="product"/>
                      </div>
                      <div className="col-12 col-md-6">
                      <Sizes mini={mini} regular={regular} large={large}/>
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
                        onClick={()=> { value.addCollectionToCart(id);}} > 
                        {inCart? (
                        <p className="mx-auto ic text-capitalize text-center py-2 mb-0" disabled>Item added</p> ) : (
                        <p className= "py-2 nic mx-auto text-capitalize mb-0">Add to Cart</p>
                        )}
                      </button>
                    </div>
                      <div className="col-12">
                        <Tabs description={description} usage={usage} contains={contains}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
            </div>
            </section>
            </>
          )
        }}
      </ProductConsumer>
      <div className="mt-3 pt-4"><Featured/></div>
      </>
    )
  }
}

