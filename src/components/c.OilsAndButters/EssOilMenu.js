import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class EssOilMenu extends Component {
  render() {
    const { id, title } = this.props.EssOilItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/OILS-and-BUTTERS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
EssOilMenu.propTypes = {
  EssOilItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

