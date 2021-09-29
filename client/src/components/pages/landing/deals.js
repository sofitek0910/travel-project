import React, { Component } from 'react';
import { GiCutDiamond } from "react-icons/gi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import package1 from  "../../../assets/images/package1.jpg";
import package2 from "../../../assets/images/package2.jpg";
import package3 from "../../../assets/images/package3.jpg";


export default class Deals extends Component {
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
            <section className="deals">
                <div className="container">
                    <div className="section-title section-title-white text-center">
                        <h2>Last Minute Deals</h2>
                        <div className="section-icon">
                            <GiCutDiamond/>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                    </div>
                    <div className="deals-outer">
                        <Slider {...settings} className="row deals-slider slider-button">
                            <div className="col-4 display-initial">
                                <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package1} alt="" />
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 display-initial">
                                <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package2} alt=""/>
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 display-initial">
                            <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package3} alt=""/>
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 display-initial">
                            <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package1} alt=""/>
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 display-initial">
                            <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package2} alt=""/>
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 display-initial">
                            <div className="deals-item">
                                    <div className="deals-item-outer">
                                        <div className="deals-image">
                                            <img src={package3} alt=""/>
                                            <span className="deal-price">$8600</span>
                                        </div>
                                        <div className="deal-content">
                                            <div className="deal-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star-o"></span>
                                                <span className="fa fa-star-o"></span>
                                            </div>
                                            <h3>Paris and Bordeaus</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            <a href="tour-detail.html" className="btn-blue btn-red">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}