import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class AdjusMenu extends Component {
  render() {
    const { id, title } = this.props.AdjusItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/SURFACTANTS" className="text-contrast" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
AdjusMenu.propTypes = {
  SurfItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};