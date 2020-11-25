import React, { Component } from 'react';
import {ProductConsumer} from '../../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SuperMenu  from '../SuperMenu';
import Tabs from '../Tabs';
import Sizes from '../Sizes';
import Featured from '../Featured';
import SubmenuOilsButters from './SubmenuOilsButters';

export default class AllButters extends Component {
    
  render() {
    return (
      <>
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, life, contains, price, title,inCart, count,increment,decrement, category, mini, regular, large} = value.butterDetail;
          return (
            <div className="container-fluid">
            <div className="bbn"><SuperMenu/></div>
            <section className="section bg-contrast">
              <div className="rounded shadow container-fluid border py-4">
                <div className="row">
                  <div className="col-12 col-md-3 bbn">
                    <SubmenuOilsButters/>
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
                              <span className="btn btn-black bbindx-a" onClick={()=>decrement(id)} ><i className="fas fa-minus"></i></span>
                              <input type="text" className="form-control mx-2" disabled placeholder= {count} aria-label="count" aria-describedby="basic-addon" />
                            <span className="btn btn-black bbindex-c" onClick={()=>increment(id)} ><i className="fas fa-plus vertical-align-center"></i></span>
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
                              value.addBsToCart(id);
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

const EmptyWrapper = styled.div `

.myaccordion-body {
  position: relative;
  display: flex;
  align-items: center;
}
label {
  cursor: pointer;
}


a {
  text-decoration: none;
  color: inherit;
}

input[type="radio"] {
  position: absolute;
  left: -9999px;
}


.myaccordion {
  position: relative;
  width: 100%;
  min-height: 300px;
  margin: 0 auto;
  background: var(--accordion-color);
  color: var(--white);
}

.myaccordion label {
  text-align: center;
}

.myaccordion,
.myaccordion li,
.myaccordion .myaccordion-title {
  display: flex;
}

.myaccordion li:not(:last-child) {
  border: 1px solid var(--separator-color);
}


.myaccordion .myaccordion-title:hover {
  color: var(--active-color);
}


.myaccordion .myaccordion-content {
  display: none;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 20px;
}

[value="Description"]:checked ~ .myaccordion [data-radio="description"],
[value="Contains"]:checked ~ .myaccordion [data-radio="contains"],
[value="Usage"]:checked ~ .myaccordion [data-radio="usage"],
[value="Life"]:checked ~ .myaccordion [data-radio="life"] {
  flex-grow: 1;
}

[value="Description"]:checked ~ .myaccordion [for="description"] + .myaccordion-content,
[value="Contains"]:checked ~ .myaccordion [for="contains"] + .myaccordion-content,
[value="Usage"]:checked ~ .myaccordion [for="usage"] + .myaccordion-content,
[value="Life"]:checked ~ .myaccordion [for="life"] + .myaccordion-content {
  display: flex;
}

[value="Description"]:checked ~ .myaccordion [for="description"],
[value="Contains"]:checked ~ .myaccordion [for="contains"],
[value="Usage"]:checked ~ .myaccordion [for="usage"],
[value="Life"]:checked ~ .myaccordion [for="life"] {
  color: var(--active-color);
}
`