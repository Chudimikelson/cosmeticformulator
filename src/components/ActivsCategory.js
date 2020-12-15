import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import SuperMenu from './SuperMenu';

export default class ActivsCategory extends Component {
  render() {
    const { id, title, img, mini} = this.props.activsCategory;
    return (
      <>
      <SuperMenu/>
      <ProductConsumer>
        {value => (
          <div className="col-6 col-md-3 d-flex" onClick={()=> value.handleDetail (id)}>
            <Link to="/ACTIVES-and-PRESERVATIVES" className="card px-3 py-2"><img src={img} className="img-responsive rounded" />
            <h6>{title}</h6>
            <p className="mb-0 d-flex flex-wrap align-items-center">$<span className="price text-darker bold ml-1 mr-auto">{mini}</span> <span className="badge badge-primary p-2">Buy Now</span></p>
            </Link>
          </div>
        )}
      </ProductConsumer>
      </>
    );
  }
}
