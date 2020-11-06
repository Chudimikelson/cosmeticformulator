import React from 'react';
import oliveOil from '../photos/olive-oil.jpg';
import Menubar from './Menubar';
import styled from 'styled-components';

export default function Butters() {
  return (
  <ButterSection>
  <div className="bbn"><Menubar/></div>  
  <div className="bg-light shadow-box bbn">
    <div class="container-fluid py-0">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb small text-contrast">
            <li class="breadcrumb-item"><a href="../">Home</a></li>
            <li class="breadcrumb-item"><a href="home.html">Shop</a></li>
            <li class="breadcrumb-item active" aria-current="page">Cart</li>
        </ol>
      </nav>
    </div>
  </div>
  <section className="brands">
    <div className="container pt-md-1">
      <div class="section-heading mb-3"><span class="font-md bold">Butters</span></div>
      <div class="row gap-y">
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "100px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
            <div class="card border-0 shadow-sm shadow-hover lift-hover">
                <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
            </div>
        </div>
        <div class="col-6 col-sm-4 col-md-3">
              <div class="card border-0 shadow-sm shadow-hover lift-hover">
                  <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{"max-height": "64px"}} src={oliveOil} alt=""/></a></div>
              </div>
          </div>
      </div>
    </div>
  </section>
  </ButterSection>
  )
}

const ButterSection = styled.div`
.breadcrumb {
    background: #90ee90;
}
`