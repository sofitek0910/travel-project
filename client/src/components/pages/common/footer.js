import React, { Component } from 'react';
import {Link} from "react-router-dom";

import YatraWhite from  "../../../assets/images/Yatra-white.png";
import bucket1 from  "../../../assets/images/bucket1.jpg";
import bucket2 from  "../../../assets/images/bucket2.jpg";
import bucket3 from  "../../../assets/images/bucket3.jpg";
import insta1 from  "../../../assets/images/insta1.jpg";
import insta2 from  "../../../assets/images/insta2.jpg";
import insta3 from  "../../../assets/images/insta3.jpg";
import insta4 from  "../../../assets/images/insta4.jpg";
import insta5 from  "../../../assets/images/insta5.jpg";
import insta6 from  "../../../assets/images/insta6.jpg";
import insta7 from  "../../../assets/images/insta7.jpg";
import insta8 from  "../../../assets/images/insta8.jpg";
import insta9 from  "../../../assets/images/insta9.jpg";

import { GrLocation } from 'react-icons/gr';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer-upper">
                    <div className="container">
                        <div className="footer-links">
                            <div className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-about footer-margin">
                                        <div className="about-logo">
                                            <img src={YatraWhite} alt=""/>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                        <div className="about-location">
                                            <ul>
                                                <li>
                                                    <GrLocation/> Location
                                                </li>
                                                <li>
                                                    <FiPhone/> (012)-345-6789
                                                </li>                                        
                                                <li>
                                                    <AiOutlineMail/> tourntravel@testmail.com
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-social-links">
                                            <ul>
                                                <li className="social-icon"><Link to=""><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                                <li className="social-icon"><Link to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                                                <li className="social-icon"><Link to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                                <li className="social-icon"><Link to=""><i className="fa fa-youtube" aria-hidden="true"></i></Link></li>
                                                <li className="social-icon"><Link to=""><i className="fa fa-google" aria-hidden="true"></i></Link></li>
                                            </ul>
                                        </div>    
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-links-list footer-margin">
                                        <h3>Browse Tour</h3>
                                        <ul>
                                            <li><Link to="">Cyclades <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">North Ionian <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">Sporades <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Destinations <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Yatchs <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                            <li><Link to="">View all Cruises <i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-recent-post footer-margin">
                                        <h3>Recent Posts</h3>
                                        <ul>
                                            <li>
                                                <div className="recent-post-item">
                                                    <div className="recent-post-image">
                                                        <img src={bucket1} alt=""/>
                                                    </div>
                                                    <div className="recent-post-content">
                                                        <h4><a href="tour-detail.html">A trip to heaven</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="recent-post-item">
                                                    <div className="recent-post-image">
                                                        <img src={bucket2} alt=""/>
                                                    </div>
                                                    <div className="recent-post-content">
                                                        <h4><a href="tour-detail.html">Diving in Atlantic</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="recent-post-item">
                                                    <div className="recent-post-image">
                                                        <img src={bucket3} alt=""/>
                                                    </div>
                                                    <div className="recent-post-content">
                                                        <h4><a href="tour-detail.html">Travellers History</a></h4>
                                                        <p>June 17, 2018</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer-links-list">
                                        <div className="footer-instagram">
                                            <h3>Instagram</h3>
                                            <ul>
                                                <li><img src={insta1} alt=""/></li>
                                                <li><img src={insta2} alt=""/></li>
                                                <li><img src={insta3} alt=""/></li>
                                                <li><img src={insta4} alt=""/></li>
                                                <li><img src={insta5} alt=""/></li>
                                                <li><img src={insta6} alt=""/></li>
                                                <li><img src={insta7} alt=""/></li>
                                                <li><img src={insta8} alt=""/></li>
                                                <li><img src={insta9} alt=""/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}