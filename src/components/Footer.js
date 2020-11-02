import React, { Component } from 'react';
import logo from '../cfd.png';

export default class Footer extends Component {
    render() {
    return (
        <footer class="site-footer section text-center block bg-contrast">
                <div class="container py-4">
                    <div class="row gap-y">
                        <div class="col-md-3 bbn"><img src={logo} alt="" style={{'height':'150px'}}/>
                        </div>
                        <div class="col-md-6 px-5">
                            <h6 class="bold">Subscribe to our newsletter</h6>
                            <p class="text-secondary">By registering with us, you will receive right in your inbox all new features and updates. <span class="bold">Subscribe now!</span></p>
                            <form action="srv/register.php" class="form" data-response-message-animation="slide-in-left">
                                <div class="input-group"><input type="email" name="Subscribe[email]" class="form-control rounded-circle-left" placeholder="Enter your email" required/>
                                    <div class="input-group-append"><button class="btn btn-rounded btn-dark" type="submit">Register</button></div>
                                </div>
                            </form>
                            <div class="response-message"><i class="fas fa-envelope font-lg"></i>
                                <p class="font-md m-0">Check your email</p>
                                <p class="response">We sent you an email with a link to get started. You’ll be in your account in no time.</p>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <h6 class="bold text-left">Contact Us</h6>
                            <nav class="nav flex-column ">
                                <div class="d-flex align-items-center"><i class="fas fa-map-marker mr-2"></i> 123 Street St, Your City, YC Your Country</div>
                                <div class="mt-2 d-flex align-items-center"><i class="fas fa-phone mr-2"></i> (123) 456-7890</div>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr class="mt-5"/>
                <nav class="nav social-icons justify-content-center small mt-4"><a href="#" class="mr-3 font-regular text-secondary"><i class="fab fa-facebook-f"></i></a> <a href="#" class="mr-3 font-regular text-secondary"><i class="fab fa-twitter"></i></a> <a href="#" class="mr-3 font-regular text-secondary"><i class="fab fa-instagram"></i></a> <a href="#" class="mr-3 font-regular text-secondary"><i class="fas fa-rss"></i></a> <a href="#" class="font-regular text-secondary"><i class="fab fa-linkedin-in"></i></a></nav>
                <p class="brand bold copyright text-secondary">Copyright © 2020 Cosmetic Formulator Depot.</p>
                <p class="small text-secondary"><em>Design by</em><a href="#istagram">Blackgene Development</a></p>
            </footer>
    )
  }
}
