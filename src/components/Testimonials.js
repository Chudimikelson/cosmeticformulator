import React from 'react'

export default function Testimonials () {
  return (
    <div className="container">
      <section className="bbn section block bg-contrast">
        <div className="py-4">
        <div className="font-md text-center u-dancing-script">What our customers are saying</div>
          <div className="swiper-container pb-5">
            <div className="swiper-wrapper d-flex">
              <div className="swiper-slide col-4">
                      <div className="card shadow">
                          <div className="container-fluid py-0">
                              <div className="row">
                                  <div className="col-md-5 py-9 py-sm-7 overlay overlay-dark alpha-2 image-background cover center-top" id="img-1"></div>
                                  <div className="col-md-7">
                                      <div className="p-4">
                                          <h6 className="bold font-l">Rafael Freeman</h6>
                                          <p className="small mt-0 text-primary text-uppercase mb-5">Founder &amp; CEO</p>
                                          <blockquote className="team-quote pt-1"><i className="quote fas fa-quote-left"></i>
                                              <p className="italic pl-4">Long time ago, this guy started it all.</p>
                                          </blockquote>
                                          <hr className="w-25 mt-5"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="swiper-slide col-4">
                      <div className="card shadow">
                          <div className="container-fluid py-0">
                              <div className="row">
                                  <div className="col-md-5 py-9 py-sm-7 overlay overlay-dark alpha-2 image-background cover center-top" id="img-2"></div>
                                  <div className="col-md-7">
                                      <div className="p-4">
                                          <h6 className="bold font-l">Aline De Souza</h6>
                                          <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                                          <blockquote className="team-quote pt-1"><i className="quote fas fa-quote-left"></i>
                                              <p className="italic pl-4">The girl that influences our products.</p>
                                          </blockquote>
                                          <hr className="w-25 mt-5"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="swiper-slide col-4">
                      <div className="card shadow">
                          <div className="container-fluid py-0">
                              <div className="row">
                                  <div className="col-md-5 py-9 py-sm-7 overlay overlay-dark alpha-2 image-background cover center-top" id="img-6"></div>
                                  <div className="col-md-7">
                                      <div className="p-4">
                                          <h6 className="bold font-l">Richard Smith</h6>
                                          <p className="small mt-0 text-primary text-uppercase mb-5">Lead Developer</p>
                                          <blockquote className="team-quote pt-1"><i className="quote fas fa-quote-left"></i>
                                              <p className="italic pl-4">Geek, manager, and manager of geeks.</p>
                                          </blockquote>
                                          <hr className="w-25 mt-5"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  )
}
