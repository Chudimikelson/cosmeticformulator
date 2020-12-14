import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class PresvMenu extends Component {
  render() {
    const { id, title } = this.props.presvItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/ACTIVES-and-PRESERVATIVES" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
PresvMenu.propTypes = {
  presvItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};