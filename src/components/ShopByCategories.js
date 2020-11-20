import React from 'react';
import styled from 'styled-components';
import catPic1 from '../photos/buttermilk.jpg';
import catPic2 from '../carrier-oils.jpg';
import catPic3 from '../photos/avocado_unrefined.jpg';
import {Link} from 'react-router-dom';

export default function ShopByCategories() {
  return (
    <Sbc>
      <div className="d-flex flex-wrap">
        <div className="col-md-4 col-12">
          <img className="img-fluid card shadow" style={{height:250}}  src={catPic2}  alt="Etoile Beauty Nig skin lightening black soap brightening body lotion"/><Link to="/OILS">
          <div className="finess mx-auto">
            
              <button className="py-1 text-capitalize">Oils</button>
            
          </div> </Link> 
        </div>
        <div className="col-md-4 col-12"><img className="img-fluid card shadow" alt="Natural Lightening and skin brightening lotions and creams for kids" style={{height:250}}  src={catPic3} /><Link to="/BUTTERS">
          <div className="finess mx-auto"><button className="py-1 text-capitalize">Butters</button>
          </div></Link>
        </div>
        <div className="col-md-4 col-12"><img className="img-fluid card shadow" alt="Natural Lightening and skin brightening lotions and creams for kids" style={{height:250}}  src={catPic1} /><Link to="/POWDERS">
          <div className="finess mx-auto"><button className="py-1 text-capitalize">Powders</button>
          </div></Link>
        </div>
      </div>
    </Sbc>
  )
}

const Sbc = styled.div `

.flex-container {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  justify-content: center;
}

.finess {
  width:50%;
  font-size: 1.5rem;
  background: rgba(250,248,250, 0.5);
  position: relative;
  bottom: 8rem;
  text-align: center;
  border-radius: .5rem;
}

.btn:hover {
  background: #28a745;
}

img {
  width:100%;
}

`