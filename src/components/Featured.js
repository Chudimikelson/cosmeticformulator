import React from 'react';
import styled from 'styled-components';
import lavenderbud from '../photos/lavenderbuds.jpg';
import essOil from '../photos/e-oil.jpg';
import butterMilk from '../photos/buttermilk.jpg';
import oliveOil from '../photos/olive-oil.jpg';

export default function Featured() {
  return (
    <SectionCss>
      <section className="partners bg-light b-b">
        <div className="font-md text-center u-dancing-script">Featured Products</div>
        <div className="swiper-container">
          <div className="swiper-wrapper d-flex justify-content-center flex-wrap">
          <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={lavenderbud} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Lavender Buds<p>Starting at $2.50</p></div>
              <button className="btn btn-primary text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={essOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Essential Oil <p>Starting at $3</p></div>
              <button className="btn btn-primary text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={butterMilk} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Buttermilk Powder<p>Starting at $5</p></div>
              <button className="btn btn-primary text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={oliveOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Olive Oil <p>Starting at $3</p></div>
              <button className="btn btn-primary text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={essOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Green Tea<p>Starting at $3</p></div>
              <button className="btn btn-primary text-center col-12">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionCss>
  )
}

const SectionCss = styled.div`
img  {
  height: 150px;
  width: auto;
}
`