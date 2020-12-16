import React from 'react';
import ShopByCategories from './ShopByCategories';
import Banner from './Banner';
import Featured from './Featured';
import Testimonials from './Testimonials';
import SuperMenu from './SuperMenu';
import ReviewsCarousel from './ReviewsCarousel';

export default function Home() {
  return (
      <React.Fragment>
        <div className="bbn"><SuperMenu/></div>
          <Banner />
          <ShopByCategories/>         
          <Featured/>
          <div className="bbn"><ReviewsCarousel/></div>
      </React.Fragment> 
  )
}
