import React, { Component } from 'react';
import { GiCutDiamond } from "react-icons/gi";

import deal1 from "../../../assets/images/deal1.jpg";
import deal2 from "../../../assets/images/deal2.jpg";
import deal3 from "../../../assets/images/deal3.jpg";
import deal4 from "../../../assets/images/deal4.jpg";
import deal5 from "../../../assets/images/deal5.jpg";

export default class TopDestinations extends Component {
    render() {
        return (
            <>
            <section className="top-destinations mt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Top Destinations</h2>
                        <div className="section-icon">
                            <GiCutDiamond/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-xs-4">
                            <div className="top-destination-item">
                                <img className="img-responsive" src={deal1} alt=""/>
                                <div className="overlay">
                                    <h2><a href="tour-detail.html">Bahamas</a></h2>
                                    <p>Plan Your Tour to Bahamas With Us.</p>
                                </div>
                            </div>
                            <div className="top-destination-item">
                                <img className="img-responsive" src={deal2} alt=""/>
                                <div className="overlay">
                                    <h2><a href="tour-detail.html">Italy</a></h2>
                                    <p>Plan Your Tour to Bahamas With Us.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <div className="top-destination-item destination-margin">
                                <img className="img-responsive" src={deal5} alt=""/>
                                <div className="overlay overlay-full">
                                    <h2><a href="tour-detail.html">Egypt</a></h2>
                                    <p>Plan Your Tour to Bahamas With Us.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <div className="top-destination-item">
                                <img className="img-responsive" src={deal4} alt=""/>
                                <div className="overlay">
                                    <h2><a href="tour-detail.html">Nepal</a></h2>
                                    <p>Plan Your Tour to Bahamas With Us.</p>
                                </div>
                            </div>
                            <div className="top-destination-item">
                                <img className="img-responsive" src={deal3} alt=""/>
                                <div className="overlay">
                                    <h2><a href="tour-detail.html">Thailand</a></h2>
                                    <p>Plan Your Tour to Bahamas With Us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trip-ad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="trip-ad-content">
                                <div className="ad-title">
                                    <h2>Explore The <span>Thailand Trip</span></h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna aliquam erat volutpat.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna aliquam erat volutpat.</p>
                                <div className="trip-ad-btn">
                                    <a href="tour-detail.html" className="btn-blue btn-red">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="ad-price">
                                <div className="ad-price-inner">
                                    <span>Starting at <span className="rate mt-4">$300</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}