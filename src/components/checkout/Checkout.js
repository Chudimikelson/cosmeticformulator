import React, { Component } from 'react';
import styled from 'styled-components';
import CartList from '../Cart/CartList';
import {ProductConsumer} from '../../Context';
import EmptyCart from '../Cart/EmptyCart';
import CartTotals from '../Cart/CartTotals';
import PaystackPay from '../Cart/PaystackPay';
import {Link} from 'react-router-dom'; 



export default class Checkout extends Component {
  
  
  constructor(props) {
    super(props)
    this.superheroElement = React.createRef();
    this.customerAddress = React.createRef();
    this.customerEmail = React.createRef();
    this.customerPhone = React.createRef();

    this.state ={
      fullname:'',
      emaill:'',
      phone:'',
      address:''
    }
  }
  getAddress = (e) => {
    e.preventDefault();
    this.setState ({address: this.customerAddress.current.value})
  };
  getEmail = (e) => {
    e.preventDefault();
    this.setState ({emaill: this.customerEmail.current.value})
  };
  getPhone = (e) => {
    e.preventDefault();
    this.setState ({phone: this.customerPhone.current.value})
    
  };
  // handleHero = () => {
  //   this.superheroElement.current.handleEmail();
  //   // this.superheroElement.current.handlePhone();
  // };
  render() {
    
    return (
      
      <ProductConsumer>
          {value =>{
            
            const {cart,cartTotal,shipping, cartSubTotal,clearCart, discount} = value;
            const cartItems = cart.map(cartItem => cartItem.count + " " + cartItem.title);
            const maill = this.state.emaill;
            const phone = this.state.phone;
            const customerAddress = this.state.address;
            if(cart.length>0){
              
              return(
                
     <React.Fragment>
       <Spaces>
         <section className="cert-header paddit">
                    <div className="container ">
                      <div className="col-md-10">
                        <h3 className="text-contrast regular">Your Cart</h3>
                        <h2 className="h1 text-contrast"><span className="mr-1">&#8358;</span>{cartTotal}<small>.00</small></h2>
                        <p className="mb-0 text-light">Please fill your Shipping Details and proceed to Payment</p>
                      </div>
                    </div>
                <div className="container py-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb small no-decor-links">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Cart</li>
                        </ol>
                    </nav>
                </div>
                  
              </section>
      <section className="section">
        <div className="container pt-0">
          <div className="row">
            {/** cart items */}
            <CartList value={value}/>
            {/** sidebar*/}
            <aside class="col-lg-4 pt-4 pt-lg-0 mt-md-n8 bring-to-front">
              <div class="card shadow border-0 rounded-lg">
                <div class="card-body">
                  <CartTotals value={value} history={this.props.history} />
                  {/** customer details  */}
                  <div class="card">
                                        <div class="card-header"><button className="card-title btn bold" data-toggle="collapse" data-target="#clp-promo"><i class="fas fa-angle-down angle"></i>Customer Information</button></div>
                                        <div id="clp-promo" class="collapse show" data-parent="#cart-options">
                                            <div class="card-body">
                                                <form class="form" onSubmit={this.getEmail} onBlur={this.handleHero}>
                                                    <div class="form-group"><label for="email" class="control-label">Email Address</label>
                                                    <input onBlur={this.getEmail} ref={this.customerEmail} className = "form-control" type="text" placeholder="Your Email Address"/>
                                                    <p class="my-0 small text-muted">Your registered email address</p>
                                                    </div>
                                                    <div class="form-group"><label for="phone" class="control-label">Phone Number</label> <input onBlur={this.getPhone} ref = {this.customerPhone} className = "form-control" type="text" placeholder="Your Phone Number"/>
                                        <p class="my-0 small text-muted">Receiver's Mobile Number</p>
                                    </div>
                                    <div className="form-group">
                                      <label for="address" className="control-label">Shipping to</label>
                                      <textarea onBlur={this.getAddress} ref={this.customerAddress}  className="form-control bg-contrast" placeholder="Your Address, 1234 Your Street, Your City" rows="4" required=""></textarea>
                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                {/** TOTAL */}
                                <hr class="my-4"/>
                                <div className="d-flex flex-wrap text-capitalize justify-content-between">
            <p className="bold text-darker text-capitalize">sub total</p>
            <p className="bold price ml-sm-auto"><span className="mr-1">&#8358;</span> {cartSubTotal} </p>
          </div>
          {/*<div className="d-flex flex-wrap text-capitalize text-danger justify-content-between">
            <p className="bold text-capitalize">10% Discount</p>
            <p className="bold price ml-sm-auto"><span className="mr-1">- &#8358;</span>{discount} </p>
          </div>*/}
          <div className="d-flex flex-wrap text-capitalize justify-content-between">
            <p className="text-capitalize bold text-darker">Shipping fee: </p>
            <p className="bold price ml-sm-auto"><span className="mr-1">&#8358;</span>{shipping} </p>
          </div>
          <div class="d-flex flex-wrap justify-content-between">
                                    <p class="bold text-darker text-uppercase">Total</p>
                                    <p class="h5 bold price ml-sm-auto"><span>&#8358;</span> {cartTotal} </p>
                                </div>{/** Proceed  */}
                                <div className="card">
                                <div className="card-header">
                                  <p className="card-title btn bold"><i className="fas fa-credit-card mr-2"></i>Proceed to Payment</p>
                                </div>
                                <PaystackPay 
                  key={cartItems}
                  customerphone = {phone}
                  customermail = {maill}
                  customeraddress = {customerAddress}
                  ref = {this.superheroElement}
                  clearCart={clearCart}
                  history={this.props.history} 
                  total={cartTotal} 
                  cartItems = {cartItems}/>
                                </div>
                </div>
              </div>
            </aside>
            
            </div>
        </div>
        
      </section> </Spaces>
     </React.Fragment>
     );
    } else {
      return <EmptyCart />;
    }
  }}
</ProductConsumer>
    )
  }
}
const Spaces = styled.div `
.cert-header {
    background-image: linear-gradient(45deg, #fb31bd, #fc9e2196);
}
.steps-text {
  font-size: 1.7rem;
}
.flex-container.main {
	display: flex;
	flex-direction: column;
	
}

.addressfield {
  min-height: 100px
}
.badge {
	background-color: palevioletred;
  margin-right: .9rem;
  min-width: 3rem;
}
.paddin input {
  padding: 5px;
  margin-top: 1px;
  margin-bottom: 1px; 
	width: 100%;
	// max-width: 80%;
	border: 0.5px lightgrey solid;
	border-radius: 3px;
}
.paddin h5 {
	margin-bottom: 2px; 
	margin-top: 10px;
}
.paystack-footer img {
  width: 200px;
}
.p-type input {
  padding: 1px;
}
`