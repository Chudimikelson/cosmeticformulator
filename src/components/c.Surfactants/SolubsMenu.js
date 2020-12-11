import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class SolubsMenu extends Component {
  render() {
    const { id, title } = this.props.SolubItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/SURFACTANTS" className="text-contrast" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
SolubsMenu.propTypes = {
  SolubItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};