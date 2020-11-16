import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { MDBDropdownItem } from "mdbreact";

export default class OilsMenu extends Component {
  render() {
    const { id, title } = this.props.oilsItem;
    return (
      <Btn>
  
        <ProductConsumer>
            {value => (
              <Link to="/oils"><MDBDropdownItem onClick={()=>{value.showOilItemDetails(id)}}>{title}</MDBDropdownItem> </Link>              
            )}
          </ProductConsumer>

        </Btn>
    )
  }
}
OilsMenu.propTypes = {
  oilsItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  }).isRequired
};

const Btn = styled.div `

.finess {
  position: relative;
  bottom: 3rem;
  left:0;
}

.small-text {
  font-size: 1.2rem;
}
.cxx {
  position relative;
  bottom: 2rem;
  color: palevioletred;
}
.card {
  border: none;
}

`