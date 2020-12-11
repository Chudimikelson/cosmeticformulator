import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class ExfoMenu extends Component {
  render() {
    const { id, title } = this.props.exfoItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/POWDERS-and-EXTRACTS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
ExfoMenu.propTypes = {
  exfoItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};