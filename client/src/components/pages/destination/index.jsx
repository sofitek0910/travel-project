import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

import destination1 from '../../../assets/images/destination-fw1.jpg';

export default class Landing extends Component {
    render() {
        return (
            <>
                <HeaderNavbar/>
                <section className="breadcrumb-outer text-center">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <h2>Destination Fullwidth</h2>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Destinations</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="section-overlay"></div>
                </section>

                <section className="destinations">
                    <div className="container">
                        <div className="row">
                            <DestinationOuter/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}

class DestinationOuter extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="destination-outer">
                    <div className="destination-fw-item">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="destination-fw-image">
                                    <img src={destination1} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="destination-fw-desc fw-content">
                                    <h3>
                                        <Link to="/TourDetail/7">Bahamas Royal Caribbean Cruises</Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <div className="destination-fw-content">
                                        <p className="fw-info"><i className="fa fa-user-o" aria-hidden="true"></i> 23</p>
                                        <p className="fw-info"><i className="fa fa-clock-o" aria-hidden="true"></i> 18 May - 27 May</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="deal-rating">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star-o"></span>
                                    <span className="fa fa-star-o"></span>
                                </div>
                                <div className="fw-btns">
                                    <div className="fw-price"><p>Starts from:<span className="bold">$659</span></p></div>
                                    <div className="destination-btns">
                                        <Link to="#" className="btn-blue btn-red" tabIndex="0">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}