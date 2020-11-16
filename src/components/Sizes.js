import React from 'react'

export default function Sizes({mini, regular, large}) {
  return (
    <div className="row mb-3">
      <div className="col-12 col-md-6">Sizes:</div>
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="free-shipping" name="shipping-options" checked="checked"/> <label className="control-label text-darker" for="free-shipping">100g</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{mini}</span></div>
        </div>
      </div>
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="standard-shipping" name="shipping-options"/> <label className="control-label text-darker" for="standard-shipping">500g</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{regular}</span></div>
        </div>
      </div>
      <div className="card-body w-70">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary"><input className="form-control" type="radio" id="express-shipping" name="shipping-options"/> <label className="control-label text-darker" for="express-shipping">1kg</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{large}</span></div>
        </div>
      </div>
    </div>
  )
}
