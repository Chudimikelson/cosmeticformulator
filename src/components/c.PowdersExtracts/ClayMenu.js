import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class ClayMenu extends Component {
  render() {
    const { id, title } = this.props.clayItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/POWDERS-and-EXTRACTS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
ClayMenu.propTypes = {
  clayItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};