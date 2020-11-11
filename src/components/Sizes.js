import React from 'react'

export default function Sizes() {
  return (
    <div className="row mb-3">
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="free-shipping" name="shipping-options" checked="checked"/> <label className="control-label text-darker" for="free-shipping">Free Shipping</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">$0.00</span></div>
        </div>
      </div>
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="standard-shipping" name="shipping-options"/> <label className="control-label text-darker" for="standard-shipping">Standard Shipping</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">$9.99</span></div>
        </div>
      </div>
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="express-shipping" name="shipping-options"/> <label className="control-label text-darker" for="express-shipping">Express Shipping</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">$29.99</span></div>
        </div>
      </div>
    </div>
  )
}
