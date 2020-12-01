import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class SurfactantsMenu extends Component {
  render() {
    const { id, title } = this.props.SurfItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/SURFACTANTS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
SurfactantsMenu.propTypes = {
  SurfItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};
