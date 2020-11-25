import React, { Component } from 'react';
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { MDBDropdownItem } from "mdbreact";

export default class ButtersMenu extends Component {
  render() {
    const { id, title } = this.props.buttersItem;
    return (
      <Btn>
        <ProductConsumer>
            {value => (
              <Link to="/butters" onClick={()=>{value.showButterItemDetails(id)}}>{title}</Link>              
            )}
          </ProductConsumer>
        </Btn>
    )
  }
}
ButtersMenu.propTypes = {
  buttersItem: PropTypes.shape({
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