import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Menubar from './Menubar';
import Breadcrumb  from './Breadcrumbs';
import ButtersList from './ButtersList';

export default class ButterSingle extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
          const {id,usage,description,img, life, contains, price, title,inCart, count,increment,decrement} = value.butterDetail;
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
                    <img src={img} className="collection-image" alt="product"/>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="">sizes input</div>
                    <div className="row">
                      <div className="col-12 col-md-6">Quantity
                      <div className="def-number-input number-input">
                      <span className="btn btn-black bbindx-a" onClick={()=>decrement(id)} > - </span>
                      <span className="btn btn-black bbindx-b"> {count} </span>
                      <span className="btn btn-black bbindx-c" onClick={()=>increment(id)} > + </span>
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
                </div>
                <div className="row page-title">
                  <li><strong>Description</strong><br/>{description}</li>
                  <li><strong>Contains</strong><br/>{contains}</li>
                  <li><strong>How to use</strong><br/>{usage}</li>
                  <li><strong>Safety</strong><br/>{life}</li>
                  
                  <Link to='/collections'>
                    <button className="cart-btn text-center py-0 px-0 my-2" ><p className="mx-auto py-2 btc mb-0">Back to Collections</p></button>
                  </Link>
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