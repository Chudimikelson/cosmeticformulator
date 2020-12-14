import React, { Component } from 'react';
import logo from '../cfd.png';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
    return (
        <footer className="site-footer section bg-contrast">
                <div className="container py-4">
                    <div className="row gap-y">
                        <div className="col-md-3 bbn"><img src={logo} alt="" style={{'height':'150px'}}/>
                        </div>
                        <div className="col-md-6 px-5">
                            <h6 className="bold">Subscribe to our newsletter</h6>
                            <p className="text-secondary text-center">By registering with us, you will receive right in your inbox all new features and updates. <span className="bold">Subscribe now!</span></p>
                            <form action="#" className="form" data-response-message-animation="slide-in-left">
                                <div className="input-group"><input type="email" name="Subscribe[email]" className="form-control rounded-circle-left" placeholder="Enter your email" required/>
                                    <div className="input-group-append"><button className="btn btn-rounded btn-dark" type="submit">Register</button></div>
                                </div>
                            </form>
                            <div className="response-message bbn"><i className="fas fa-envelope font-lg"></i>
                                <p className="font-md m-0">Check your email</p>
                                <p className="response">We sent you an email with a link to get started. You’ll be in your account in no time.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6 className="bold text-left">Contact Us</h6>
                            <nav className="nav">
                                <div className="d-flex"><i className="fas fa-map-marker mr-2 mainGreen p-2 rounded"></i> 123 Street St, Your City</div>
                                <div className="mt-2 d-flex align-items-center"><i className="fas fa-phone mr-2 mainGreen p-2 rounded"></i> (123) 456-7890</div>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr className="mt-5"/>
                <nav className="bg-dark nav social-icons justify-content-center small mt-4"><Link to="/" className="mr-3 font-regular text-secondary"><i className="fab fa-facebook-f"></i></Link> <Link to="/" className="mr-3 font-regular text-secondary"><i className="fab fa-twitter"></i></Link> <Link to="/" className="mr-3 font-regular text-secondary"><i className="fab fa-instagram"></i></Link> <Link to="/" className="mr-3 font-regular text-secondary"><i className="fab fa-whatsapp"></i></Link> <Link to="/" className="font-regular text-secondary"><i className="fab fa-telegram"></i></Link></nav>
                <p className="mt-3 brand bold copyright text-secondary text-center">Copyright © 2020 Cosmetic Formulator Depot.</p>
                <p className="small text-secondary text-center"><em>Design by</em><Link className="ml-1" to="/">Blackgene Development</Link></p>
            </footer>
    )
  }
}
