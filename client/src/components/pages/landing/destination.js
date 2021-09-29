import React, { Component } from 'react';
import { DiMagento } from "react-icons/di";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import package1 from  "../../../assets/images/package1.jpg";
import package2 from "../../../assets/images/package2.jpg";
import package3 from "../../../assets/images/package3.jpg";


export default class Destination extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };

        return (
            <div className="top-destinations">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Top Destinations</h2>
                        <div className="section-icon">
                            <i><DiMagento /></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <Slider {...settings} className="row package-slider slider-button">
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package1} alt="" />
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Surfing at Goa, India</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="/" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package2} alt=""/>
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Hot Air Ballooning</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package2} alt=""/>
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Lake Tohoe Advanture</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package2} alt=""/>
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Surfing at Goa, India</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package2} alt=""/>
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Hot Air Ballooning</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 display-initial">
                            <div className="package-item">
                                <div className="package-image">
                                    <img src={package3} alt=""/>
                                    <div className="package-price">
                                        <div className="deal-rating">
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star-o"></span>
                                            <span className="fa fa-star-o"></span>
                                        </div>
                                        <p><span>$659</span> / PER </p>
                                    </div>
                                </div>
                                <div className="package-content">
                                    <h3>Lake Tohoe Adventure</h3>
                                    <p className="package-days"><i className="flaticon-time"></i> 5 days</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    <div className="package-info">
                                        <a href="tour-detail.html" className="btn-blue btn-red">View more details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        )
    }
}