import React from 'react';

export default function Qty({item, value}) {
  const {id,count} = item;
  const {increment,decrement} = value;
  return (
    <div className="col-12 col-md-6 pt-md-4">Quantity:
      <div className="d-flex def-number-input number-input">
        <span className="btn btn-black bbindx-a" onClick={()=>decrement(id)} ><i className="fas fa-minus"></i></span>
        <input type="text" className="form-control mx-2" disabled placeholder= {count} aria-label="count" aria-describedby="basic-addon" />
      <span className="btn btn-black bbindex-c" onClick={()=>increment(id)} ><i className="fas fa-plus vertical-align-center"></i></span>
      </div>
    </div>
  );
}
