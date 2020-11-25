import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import slide1 from '../photos/reviewslide1.jpg';
import slide2 from '../photos/reviewslide2.jpg';
import slide3 from '../photos/reviewslide3.jpg';
import slide4 from '../photos/reviewslide4.jpg';

const Review = () => {
  return (
    
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="img-responsive rounded"
                src={slide1}
                alt="How to make lightening cream"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="img-responsive rounded"
                src={slide2}
                alt="How to make lotions"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="img-responsive rounded"
                src={slide3}
                alt="How to make african black soap"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="img-responsive rounded"
                src={slide4}
                alt="How to make natural skincare"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default Review;