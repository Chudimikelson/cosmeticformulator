import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class AddiMenu extends Component {
  render() {
    const { id, title } = this.props.addiItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/ACTIVES-and-PRESERVATIVES" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
AddiMenu.propTypes = {
  addiItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};