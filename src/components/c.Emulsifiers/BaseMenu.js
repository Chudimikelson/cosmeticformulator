import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class BaseMenu extends Component {
  render() {
    const { id, title } = this.props.BaseItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/STABILIZERS" className="text-contrast" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
BaseMenu.propTypes = {
  BaseItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};
