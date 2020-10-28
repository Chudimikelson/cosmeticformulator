import React from 'react';
import ShopByCategories from './ShopByCategories';
import Banner from './Banner';
import Menubar from './Menubar';

export default function Home() {
  return (
      <React.Fragment>
        <div><Menubar/></div>
          <Banner />
          <ShopByCategories/>         
          
      </React.Fragment> 
  )
}
