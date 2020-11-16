import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import Accordion from './Accordion';

export default props => {
  return (
    <MobileMenuCss><Menu>
      <Accordion/>
    </Menu></MobileMenuCss>
  );
};

const MobileMenuCss = styled.div`
/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 2rem;
  height: 1.8rem;
  left: 1rem;
  top: 2rem;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 0 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em 0;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}
/* Individual item */
.bm-item {
  display: inline-block;

  color: #d1d1d1;
  margin-bottom: 10px;
  text-align: left;
  text-decoration: none;
  transition: color 0.2s;
}

.bm-item:hover {
  color: #ffffff;
}
`