import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

export default class Blog extends Component {
    render() {
        return (
            <>
                <HeaderNavbar/>
                <section className="breadcrumb-outer text-center">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <h2>Blog List View</h2>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Destinations</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="section-overlay"></div>
                </section>



                <section className="blog-list grid-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="blog-wrapper">                            
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid5.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid2.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid3.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid4.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid1.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                                    <div className="blog-item grid-item">
                                        <div className="row">
                                            <div className="col-sm-5 col-xs-12">
                                                <div className="blog-image">
                                                    <img src="images/grid.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-7 col-xs-12">
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">What happened during my first trip alone</a></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit.</p>
                                                    <div className="blog-author">
                                                        <div className="pull-left">
                                                            <p><Link to="#"><i className="fa fa-user-o" aria-hidden="true"></i> Jack Richard</Link></p>
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
                            </div>

                            <div id="sidebar-sticky" className="col-md-4 col-sm-12">
                                <aside className="detail-sidebar sidebar-wrapper">
                                    <div className="item-sidebar">
                                        <div className="sidebar-item sidebar-item-dark">
                                            <div className="detail-title">
                                                <h3>Search</h3>
                                            </div>
                                            <form>
                                                <div className="row">
                                                    <div className="form-group col-md-12">
                                                        <input type="text" className="form-control" id="Name" 
                                                        placeholder="Enter the place you want to search"/>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="comment-btn">
                                                            <Link to="#" className="btn-blue btn-red">Search Now</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="post-categories sidebar-item">
                                            <div className="detail-title">
                                                <h3>Categories</h3>
                                            </div>
                                            <ul>
                                                <li><Link to="#">Science</Link></li>
                                                <li><Link to="#">Management</Link></li>
                                                <li><Link to="#">Humanities</Link></li>
                                                <li><Link to="#">Arts</Link></li>
                                                <li><Link to="#">Biology</Link></li>
                                                <li><Link to="#">Technology</Link></li>
                                            </ul>
                                        </div>
                                        <div className="recent-post clearfix sidebar-item">
                                            <div className="detail-title">
                                                <h3>Recent Posts</h3>
                                            </div>
                                            <div className="recent-item">
                                                <div className="recent-image">
                                                    <img src="images/profile1.jpg" alt=""/>
                                                </div>
                                                <div className="recent-content">
                                                    <Link to="#" className="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#" ><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>  
                                            <div className="recent-item">
                                                <div className="recent-image">
                                                    <img src="images/recent2.jpg" alt=""/>
                                                </div>
                                                <div className="recent-content">
                                                    <Link to="#" className="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#" ><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="recent-item">
                                                <div className="recent-image">
                                                    <img src="images/recent1.jpg" alt=""/>
                                                </div>
                                                <div className="recent-content">
                                                    <Link to="#" className="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#" ><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>   
                                            <div className="recent-item">
                                                <div className="recent-image">
                                                    <img src="images/recent2.jpg" alt=""/>
                                                </div>
                                                <div className="recent-content">
                                                    <Link to="#" className="tag tag-blue">#News</Link>
                                                    <h4><Link to="#" >10 Tips you should follow</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#" ><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                    </div>
                                                </div>
                                            </div>                            
                                        </div>
                                        <div className="ad1 sidebar-item">
                                            <div className="detail-title">
                                                <h3>Popular Tags</h3>
                                            </div>
                                            <div className="popular-tag-content">
                                                <ul>
                                                    <li><Link to="#">Flights</Link></li>
                                                    <li><Link to="#">Trek</Link></li>
                                                    <li><Link to="#">Travelling</Link></li>
                                                    <li><Link to="#">Cruises</Link></li>
                                                    <li><Link to="#">Sale</Link></li>
                                                    <li><Link to="#">Hotels</Link></li>
                                                    <li><Link to="#">Restaurants</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="popular-post sidebar-item">
                                            <div className="detail-title">
                                                <h3>Popular Posts</h3>
                                            </div>
                                            <div className="popular-item">
                                                <div className="popular-content">
                                                    <span className="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#"><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i className="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-item">
                                            <div className="popular-content">
                                                    <span className="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#"><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i className="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-item">
                                            <div className="popular-content">
                                                    <span className="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#"><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i className="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-item">
                                            <div className="popular-content">
                                                    <span className="item-no">01</span>
                                                    <h4><Link to="#">7 reasons Hollywood doesn’t make romantic comedies anymore</Link></h4>
                                                    <div className="author-detail">
                                                        <p><Link to="#"><i className="fa fa-user-o"></i> John Doe</Link></p>
                                                        <p><i className="fa fa-clock-o"></i> 12 May</p>
                                                        <p><Link to="#"><i className="fa fa-comment-o"></i> 3 comments</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}