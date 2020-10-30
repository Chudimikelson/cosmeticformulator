import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import lavenderbud from '../photos/lavenderbuds.jpg';
import essOil from '../photos/e-oil.jpg';
import butterMilk from '../photos/buttermilk.jpg';
import oliveOil from '../photos/olive-oil.jpg';

export default function Featured() {
  return (
    <SectionCss>
      <section className="partners bg-light b-b">
        <div className="font-md text-center">Featured Products</div>
        <div className="swiper-container">
          <div className="swiper-wrapper d-flex justify-content-center">
            <div className="swiper-slide col-md-2 card shadow mx-2"><div className="card-body"><img src={lavenderbud} alt=""/></div></div>
            <div className="swiper-slide col-md-2 card shadow mx-2"><div className="card-body"><img src={essOil} alt=""/></div></div>
            <div className="swiper-slide col-md-2 card shadow mx-2"><div className="card-body"><img src={butterMilk} alt=""/></div></div>
            <div className="swiper-slide col-md-2 card shadow mx-2"><div className="card-body"><img src={oliveOil} alt=""/></div></div>
            <div className="swiper-slide col-md-2 card shadow mx-2"><div className="card-body"><img src={lavenderbud} alt=""/></div></div>
          </div>
        </div>
      </section>
    </SectionCss>
  )
}

const SectionCss = styled.nav`
img  {
  height: 150px;
  width: auto;
}
`