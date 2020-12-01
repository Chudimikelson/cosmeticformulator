import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class PowdersMenu extends Component {
  render() {
    const { id, title } = this.props.PowdItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/POWDERS-and-EXTRACTS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
PowdersMenu.propTypes = {
  EmulItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};
