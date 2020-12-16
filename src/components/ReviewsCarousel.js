import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import slide1 from '../team/img-1.jpg';
import slide2 from '../team/img-2.jpg';
import slide3 from '../team/img-3.jpg';
import slide4 from '../team/img-4.jpg';

const Review = () => {
  return (
    <div className="mainGreen py-4">
      
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
      ><div className="font-md text-center u-dancing-script text-contrast">What our customers are saying</div>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="mx-auto d-flex">
                <div className="col-6 d-flex">
                  <img className="card h-60 my-auto img-responsive" src={slide1} alt="How to make african black soap"/>
                  <div className="bg-contrast transparent rounded text-contrast my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="bg-contrast text-secondary transparent rounded my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-active text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                  <img className="img-responsive h-60 card my-auto" src={slide2} alt="How to make african black soap"/>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <div className="mx-auto d-flex">
                <div className="col-6 d-flex">
                  <img className="card h-60 my-auto img-responsive" src={slide3} alt="How to make african black soap"/>
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                  <img className="img-responsive h-60 card my-auto" src={slide4} alt="How to make african black soap"/>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <div className="mx-auto d-flex">
                <div className="col-6 d-flex">
                  <img className="card h-60 my-auto img-responsive" src={slide1} alt="How to make african black soap"/>
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                  <img className="img-responsive h-60 card my-auto" src={slide2} alt="How to make african black soap"/>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <div className="mx-auto d-flex">
                <div className="col-6 d-flex">
                  <img className="card h-60 my-auto img-responsive" src={slide3} alt="How to make african black soap"/>
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="bg-contrast transparent rounded text-secondary my-auto p-4">                      
                    <p className="quote italic">The girl that influences our products The girl that influences our products The girl that influences our products.
                    </p>
                    <h6 className="bold font-l text-success">Aline De Souza</h6>
                    <p className="small mt-0 text-primary text-uppercase mb-5">Marketing </p>
                    <hr className="w-25"/>
                  </div>
                  <img className="img-responsive h-60 card my-auto" src={slide4} alt="How to make african black soap"/>
                </div>
              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel></div>
  );
}

export default Review;