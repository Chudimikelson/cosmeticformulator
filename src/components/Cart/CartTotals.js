import React from 'react';

export default function CartTotals({value}) {
  const {location, method} = value;
  let isregular = true;
  if (method !== "regular"){
    isregular = false;
  }
  let isAbuja = true;
  if (location !== "Abuja"){
    isAbuja =false;
  }
  
  return (
    <>
      {/**  Shipping Options */}
      <div className="card">
        <div className="card-header"><button className="card-title btn bold" data-toggle="collapse" data-target="#clp-shipping"><i className="fas fa-angle-down angle"></i>Shipping Options</button></div>
        <div id="clp-shipping" className="collapse show" data-parent="#cart-options">
          <div className="card-body">
            <div className="form-group shadow-box p-3">
              <label className="control-label font-sm text-dark">
                Delivery Location
              </label>
              <select className="form-control" value={location} onChange={(e)=> value.getLocation(e)}>
                <option value="Abakiliki">Abakiliki</option>
                <option value="Abeokuta">Abeokuta</option>
                <option value="Abia">Abia</option>
                <option value="Abuja">Abuja</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Asaba">Asaba</option>
                <option value="Akure">Akure</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benin">Benin</option>
                <option value="Calabar">Calabar</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Ibadan">Ibadan</option>
                <option value="Ife">Ife</option>
                <option value="Ilorin">Ilorin</option>
                <option value="Jos">Jos</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Lokoja">Lokoja</option>
                <option value="Lagos">Lagos</option>
                <option value="Makurdi">Makurdi</option>
                <option value="Minna">Minna</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Uyo">Uyo</option>
                <option value="Owerri">Owerri</option>
                <option value="Onitsha">Onitsha</option>
                <option value="Oshogbo">Oshogbo</option>
                <option value="Portharcourt">Portharcourt</option>
                <option value="Warri">Warri</option>
              </select>
            </div>
            <div className="form-group shadow-box p-3">
              <label className="control-label font-sm text-dark">Shipping Method</label>
              <select className="form-control"  value={method} onChange={(e)=>value.getMethod(e)}> 
                <option value="regular">Regular</option>
                <option value="doorstep">Standard</option>
              </select>
              <div disabled={isAbuja ? true : false}>
                {isAbuja ? 
                  (<div className="pt-2">
                      <p className="small text-muted my-0">Same day delivery via dispatch</p>
                  </div>) : (
                  <div className="pt-2" disabled={isregular ? true : false}>
                    {isregular ?
                      (<p className="small text-muted my-0">Pick from park. 2-4 days<sup>*</sup>
                      </p>) : (
                      <p className="small text-muted my-0">Doorstep delivery. 2-3 days<sup>*</sup></p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

