import React, { Component } from 'react';
import logo from '../cfd.png';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
    render() {
    return (
        <footer className="site-footer section bg-contrast">
                <div className="container-fluid py-4">
                    <div className="row gap-y">
                        <div className="col-md-3 bbn"><img src={logo} alt="" style={{'height':'150px'}}/>
                        </div>
                        <div className="col-md-6">
                            <h6 className="bold text-center">Subscribe to our newsletter</h6>
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
                            <h6 className="bold ">Contact Us</h6>
                            <div className="">
                                <div className=""><i className="fas fa-map-marker mr-2 mainGreen p-2 rounded"></i> 123 Street St, Your City</div>
                                <div className="mt-2"><i className="fas fa-phone mr-2 mainGreen p-2 rounded"></i> (123) 456-7890</div>
                            </div>
                            <nav className="mainGreen nav social-icons justify-content-around rounded w-md-60 p-2 mt-2">
                                <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="/"><i className="fab fa-twitter"></i></Link>
                                <Link to="/"><i className="fab fa-instagram"></i></Link>
                                <Link to="/"><i className="fab fa-whatsapp"></i></Link>
                                <Link to="/"><i className="fab fa-telegram"></i></Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr className="my-3"/>
                <p className="mb-1 brand bold text-secondary text-center">Cosmetic Formulator Depot</p><p className="text-secondary text-center">Copyright © 2020</p>
                <p className="small text-secondary text-cent u-dancing-script"><em>Built by</em><Link className="ml-1" to="/">Blackgene.Dev</Link></p>
            </footer>
    )
  }
}
