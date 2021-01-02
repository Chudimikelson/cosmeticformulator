import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import essOil from '../photos/e-oil.jpg';
import butterMilk from '../photos/buttermilk.jpg';
import oliveOil from '../photos/olive-oil.jpg';
import {ProductConsumer} from '../Context';

export default function Featured() {
  return (
    <SectionCss>
      <section className="partners bg-light b-b">
        <div className="font-md text-center u-dancing-script">Featured Products</div>
        <div className="swiper-container">
          <div className="swiper-wrapper d-flex justify-content-center flex-wrap">
          <ProductConsumer>
          {value => {
            return value.products.filter(product => {
              return product.featured === true;
            }).map( product => {
              return <div key={product.id} className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={product.img} alt=""/></div><div className="my-auto text-center col-6 col-md-12">{product.title}<p>N500 per 100g</p></div>
              <Link to='/OILS-and-BUTTERS' className="w-100"><button className="btn btn-success text-center col-12" onClick={() => value.handleDetail(product.id)}>Buy</button></Link>
              </div>
            </div>;
            });
          }}
        </ProductConsumer>
          
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={essOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Essential Oil <p>N500 per 100g</p></div>
              <button className="btn btn-success text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={butterMilk} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Buttermilk Powder<p>N500 per 100g</p></div>
              <button className="btn btn-success text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={oliveOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Olive Oil <p>N500 per 100g</p></div>
              <button className="btn btn-success text-center col-12">Buy</button>
              </div>
            </div>
            <div className="swiper-slide col-12 col-md-2 card shadow mx-2">
              <div className="card-body d-flex flex-wrap flex-md-wrap">
                <div className="col-6"><img src={essOil} alt=""/></div><div className="my-auto text-center col-6 col-md-12">Green Tea<p>N500 per 100g</p></div>
              <button className="btn btn-success text-center col-12">Buy</button>
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