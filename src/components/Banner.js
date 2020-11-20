import React from "react";
import styled from 'styled-components';
import banner from '../photos/banner-image.png';

const Banner = () => {
  return (
    <Bannerstyle>
    <section className="container-fluid pb-3">
      <div className="swiper-container shop-home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img className="rounded border" src={banner}/>
          </div>    
        </div>
      </div>
    </section>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `
img {
  max-height: 400px;
  width: 100%;
}
.finess {
  position: relative;
  bottom: 3rem;
  left: 0;
}
.fines {
  position: relative;
  top: 6rem;
  color: #fff;
}
.btn {
  background: palevioletred;
}
`

export default Banner;