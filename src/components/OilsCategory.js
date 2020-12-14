import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default class OilsCategory extends Component {
  render() {
    const { id, title, img, mini} = this.props.oilsCategory;
    return (
      <ProductConsumer>
        {value => (
          <div className="col-6 d-flex" onClick={()=> value.handleDetail (id)}>
            <Link to="/OILS-and-BUTTERS" className="card px-3 py-2"><img src={img} className="img-responsive rounded" />
            <h6>{title}</h6>
            <p className="mb-0 d-flex flex-wrap align-items-center">$<span className="price text-darker bold ml-1 mr-auto">{mini}</span> <span className="badge badge-danger">25% Off</span></p>
            </Link>
          </div>
        )}
      </ProductConsumer>
    );
  }
}