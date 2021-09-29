import React, { Component } from 'react';
import {Link} from "react-router-dom";

import blog1 from  "../../../assets/images/blog1.jpg";
import blog2 from  "../../../assets/images/blog2.jpg";
import blog3 from  "../../../assets/images/blog3.jpg";


export default class Blog extends Component {
    render() {
        return (
            <section className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center">
                                <h2>Our Blog</h2>
                                <div className="section-icon">
                                    <i className="flaticon-diamond"></i>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={blog1} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div className="blog-author">
                                        <div className="pull-left">
                                            <p><Link to=""><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div className="pull-right blog-date-icon">
                                            <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={blog2} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">remembering the road i went through</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div className="blog-author">
                                        <div className="pull-left">
                                            <p><Link to=""><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div className="pull-right blog-date-icon">
                                            <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12">
                            <div className="blog-item">
                                <div className="blog-image">
                                    <img src={blog3} alt=""/>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                    <h3><a href="blog-detail.html">planning fot the perfect familytrip outdoor</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                    <div className="blog-author">
                                        <div className="pull-left">
                                            <p><Link to=""><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
                                        </div>
                                        <div className="pull-right blog-date-icon">
                                            <p><i className="fa fa-eye" aria-hidden="true"></i> 24</p>
                                            <p><i className="fa fa-heart" aria-hidden="true"></i> 5</p>
                                            <p><i className="fa fa-comment-o" aria-hidden="true"></i> 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}