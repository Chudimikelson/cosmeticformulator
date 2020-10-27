import React from "react";
import styled from 'styled-components';
import banner from '../photos/IMG-1.jpg';

const Banner = () => {
  return (
    <Bannerstyle>
    <section className="section paddit">
      <div className="swiper-container shop-home-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container-fluid" style={{"background-color": "rgb(0, 145, 175)"}}>
              <div className="row align-items-center">
                <h1 className="text-contrast bold display-lg-4">Cosmetic Formulator </h1>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
    </Bannerstyle>
  );
}

const Bannerstyle = styled.div `

img {
  min-height: 200px;
  width: auto;
  border-radius: 50%;
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