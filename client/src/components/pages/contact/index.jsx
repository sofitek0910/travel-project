import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

export default class Contact extends Component {
    render() {
        return (
            <>
            <HeaderNavbar/>
            <section className="breadcrumb-outer text-center">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Contact Us Page</h2>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Destinations</Link></li>
                                <li className="breadcrumb-item"><Link to="#">Bahamas Cruises</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Booking</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="section-overlay"></div>
            </section>

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="contact-form">
                                <form>
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <label>Name:</label>
                                            <input type="text" className="form-control" id="Name" 
                                            placeholder="Enter full name"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email:</label>
                                            <input type="email" className="form-control" id="email" 
                                            placeholder="abc@xyz.com"/>
                                        </div>
                                        <div className="form-group col-md-6 col-left-padding">
                                            <label>Phone Number:</label>
                                            <input type="text" className="form-control" id="phnumber" 
                                            placeholder="XXXX-XXXXXX"/>
                                        </div>
                                        <div className="textarea col-md-12">
                                            <label>Message:</label>
                                            <textarea placeholder="Enter a message"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="comment-btn">
                                                <Link to="#" className="btn-blue btn-red">Send Message</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="contact-about footer-margin">
                                <div className="about-logo">
                                    <img src="images/Yatra-01.png" alt=""/>
                                </div>
                                <h4>Travel With Us</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div className="contact-location">
                                    <ul>
                                        <li><i className="flaticon-maps-and-flags" aria-hidden="true"></i> Location</li>
                                        <li><i className="flaticon-phone-call"></i> (012)-345-6789</li>                                        
                                        <li><i className="flaticon-mail"></i> tourntravel@testmail.com</li>
                                    </ul>
                                </div>
                                <div className="footer-social-links">
                                    <ul>
                                        <li className="social-icon"><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon"><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon"><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon"><Link to="#"><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                                        <li className="social-icon"><Link to="#"><i className="fa fa-google" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
            </>
        )
    }
}
