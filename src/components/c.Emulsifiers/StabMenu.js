import React, { Component } from 'react';
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

export default class StabMenu extends Component {
  render() {
    const { id, title } = this.props.StabItem;
    return (
        <ProductConsumer>
          {value => (
            <Link to="/STABILIZERS" className="text-contrast lead" onClick={()=>{value.handleDetail(id)}}>{title}</Link>              
          )}
        </ProductConsumer>
    )
  }
}
StabMenu.propTypes = {
  StabItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};
