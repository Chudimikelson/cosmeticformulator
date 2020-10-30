import React from 'react';
import ShopByCategories from './ShopByCategories';
import Banner from './Banner';
import Menubar from './Menubar';
import Featured from './Featured';

export default function Home() {
  return (
      <React.Fragment>
        <div className="bbn"><Menubar/></div>
          <Banner />
          <ShopByCategories/>         
          <Featured/>
      </React.Fragment> 
  )
}
