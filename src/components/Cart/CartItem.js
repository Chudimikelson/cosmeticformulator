import React from 'react';

export default function CartItem({item, value}) {
  const {id,title,img,total,count,size} = item;
  const {increment,decrement,removeItem} = value;
  return (
    <>
            <div class="row border-bottom py-4 mr-md-3">
              <div class="col-6 col-md-5 col-lg-8 col-xl-9">
                <div class="media d-block text-center d-sm-flex text-sm-left">
                  <img src={img} style={{width:'6rem',height:'7rem'}}
          className="img-fluid" alt="product" />
                  <div class="py-auto m-md-3">
                      <h6 class="product-title bold text-darker">{title}<span class="ml-3 text-muted small">{size}</span></h6>
                       
                      <div class="text-brand light lead"><span className="">&#8358;</span> {total}</div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-6 col-lg-4 col-xl-3 text-center text-md-left">Quantity
                <div className="row justify-content-between">
              <div className="col-12 d-flex col-md-10 py-2 py-md-auto">
                <span className="btn btn-black bbindx-a" onClick={()=>decrement(id)} > - </span>
                <span className="btn bbindx-b"> {count} </span>
                <span className="btn btn-black bbindx-a" onClick={()=>increment(id)} > + </span>
              </div>
              <div className="cart-icon col-12 col-md-2 my-md-2" onClick = {()=> removeItem(id)} >
              <i className="fas fa-trash"></i>
            </div>
            </div>
            
              </div>
          </div>
           
            
        

      {/* <div className="col-10 mx-auto col-lg-2">
      <strong> item total : <span className="mr-1">&#8358;</span> {total} </strong>
      </div> */}
    </>
  );
}
