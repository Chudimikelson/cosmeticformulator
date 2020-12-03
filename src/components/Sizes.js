import React from 'react'

export default function Sizes({mini, regular, large}) {
  return (
    <div className="d-flex flex-wrap">
      <div className="page-title w-100">Sizes:</div>
      <div className="card-body w-60 mx-auto rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary">
            <input className="form-control" type="radio" id="mini" name="size" value="mini"/> <label className="control-label text-darker" htmlFor="mini">250ml</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{mini}</span></div>
        </div>
      </div>
      <div className="card-body w-50 rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary">
            <input className="form-control" type="radio" id="regular" name="size" value="regular"/> <label className="control-label text-darker" htmlFor="regular">500ml</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{regular}</span></div>
        </div>
      </div>
      <div className="card-body w-70 rounded border mb-1">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className="radio radio-primary">
            <input className="form-control" type="radio" id="large" name="size" value="large"/> <label className="control-label text-darker" htmlFor="large">1 litre</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">N{large}</span></div>
        </div>
      </div>
      <div className="card-body w-70 rounded border">
        <div className="d-flex justify-content-between align-items-sm-center">
          <div className=""> <label className="control-label text-darker" for="more">4 litres or more</label></div>
          <div className="ml-sm-auto"><span className="font-sm text-primary">Contact us for bulk orders</span></div>
        </div>
      </div>
    </div>
  )
}
