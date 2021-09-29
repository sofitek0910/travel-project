import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

export default class BlogDetails extends Component {
    render() {
        return (
            <>
            <HeaderNavbar/>
            <section className="breadcrumb-outer text-center">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Planning for the perfect family trip</h2>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/blogs">Blog</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Planning for ...</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="section-overlay"></div>
            </section>

            <section className="item-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="item-wrapper">
                                <div className="cover-content">
                                    <div className="author-detail">
                                        <Link to="/" className="tag tag-blue">#Travel</Link>
                                        <Link to="/" className="tag tag-blue"><i className="fa fa-eye"></i> 2500</Link>
                                    </div>
                                    <h2>Planning for the perfect family trip</h2>
                                    <div className="author-detail">
                                        <span><Link to="/"><i className="fa fa-clock-o"></i> Posted On : 12 May</Link></span>
                                        <span className="blog-date-icon">
                                            <Link to="/"><i className="fa fa-eye" aria-hidden="true"></i> 24</Link>
                                            <Link to="/"><i className="fa fa-heart" aria-hidden="true"></i> 5</Link>
                                            <Link to="/"><i className="fa fa-comment-o" aria-hidden="true"></i> 0</Link>
                                        </span>
                                    </div>
                                </div>
                                <div className="cover-image">
                                    <img src="images/breadcrumb.jpg" alt=""/>
                                </div>
                                <div className="item-detail">
                                    <p className="articlepara">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                                    <div className="detail-image">
                                        <img src="images/adbg.jpg" alt=""/>
                                    </div>
                                    <p className="articlepara">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                                </div>
                                <blockquote>
                                    <p>Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="sectionoverlay"></div>
                                </blockquote>
                                <div className="author-profile">
                                    <div className="profile-image">
                                        <img src="images/profile1.jpg" alt=""/>
                                    </div>
                                    <div className="profile-content">
                                        <h3>Jack Richard</h3>
                                        <ul className="profile-link">
                                            <li><Link to="/"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link to="/"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link to="/"><i className="fa fa-tumblr"></i></Link></li>  
                                        </ul>
                                        <p>Was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                                <div className="share-buttons">
                                    <Link to="#" className="btn-large btn-facebook"><i className="fa fa-facebook" aria-hidden="true"></i> Share on Facebook</Link>
                                    <p> <span>350</span> shares</p>
                                    <Link to="#" className="btn-large btn-twitter"><i className="fa fa-twitter" aria-hidden="true"></i> Share on Twitter</Link>
                                </div>
                                <div className="item-tags">
                                    <Link to="#" className="tag-blue tag">#Sports</Link>
                                    <Link to="#" className="tag tag-blue">#World Cup</Link>
                                    <Link to="#" className="tag tag-blue">#Football</Link>
                                    <Link to="#" className="tag tag-blue">#Qatar</Link>
                                </div>
                                <div className="related-posts">
                                    <div className="row">
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="blog-item">
                                                <div className="blog-image">
                                                    <img src="images/blog4.jpg" alt=""/>
                                                </div>
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
                                        <div className="col-sm-6 col-xs-12">
                                            <div className="blog-item">
                                                <div className="blog-image">
                                                    <img src="images/blog5.jpg" alt=""/>
                                                </div>
                                                <div className="blog-content">
                                                    <div className="blog-date"><p><i className="fa fa-clock-o"></i> Posted On : 12 May</p></div>
                                                    <h3><a href="blog-detail.html">remembering the road i went through</a></h3>
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
                                
                                <div className="comment-box">
                                    <h3>Comments</h3>
                                    <ul className="comment-list">
                                        <li>
                                            <div className="comment-item">
                                                <div className="comment-image">
                                                    <img src="images/author.jpg" alt=""/>
                                                </div>
                                                <div className="comment-content">
                                                    <h4>Jack Richard</h4>
                                                    <p className="date"><i className="fa fa-clock-o"></i> 12 May 2018</p>
                                                    <p>Et veniam possimus voluptatum voluptatem excepturi qui. Unde eum ut architecto veritatis quia deserunt incidunt consequatur. In fugiat voluptatem porro distinctio deleniti quod labore. Ipsam quibusdam inventore enim molestiae ducimus perspiciatis omnis. Eos repellat enim qui sit eaque maiores.</p>
                                                    <p>Quos quos tempora ab eos eum. Et libero fugiat quia et qui. Et illo et ut dolor nihil esse dolores rerum. Ut voluptatem voluptatibus non officiis aut quia.</p>
                                                    <Link to="#" className="btn-blue btn-red">Reply</Link>
                                                </div>
                                            </div>
                                            <ul className="reply">
                                                <li>
                                                    <div className="comment-item">
                                                        <div className="comment-image">
                                                            <img src="images/author.jpg" alt=""/>
                                                        </div>
                                                        <div className="comment-content">
                                                            <h4>Jack Richard</h4>
                                                            <p className="date"><i className="fa fa-clock-o"></i> 12 May 2018</p>
                                                            <p>Et veniam possimus voluptatum voluptatem excepturi qui. Unde eum ut architecto veritatis quia deserunt incidunt consequatur. In fugiat voluptatem porro distinctio deleniti quod labore. Ipsam quibusdam inventore enim molestiae ducimus perspiciatis omnis. Eos repellat enim qui sit eaque maiores.</p>
                                                            <Link to="#" className="btn-blue btn-red">Reply</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="comment-item">
                                                <div className="comment-image">
                                                    <img src="images/author.jpg" alt=""/>
                                                </div>
                                                <div className="comment-content">
                                                    <h4>Jack Richard</h4>
                                                    <p className="date"><i className="fa fa-clock-o"></i> 12 May 2018</p>
                                                    <p>Et veniam possimus voluptatum voluptatem excepturi qui. Unde eum ut architecto veritatis quia deserunt incidunt consequatur. In fugiat voluptatem porro distinctio deleniti quod labore. Ipsam quibusdam inventore enim molestiae ducimus perspiciatis omnis. Eos repellat enim qui sit eaque maiores.</p>
                                                    <p>Quos quos tempora ab eos eum. Et libero fugiat quia et qui. Et illo et ut dolor nihil esse dolores rerum. Ut voluptatem voluptatibus non officiis aut quia.</p>
                                                    <Link to="#" className="btn-blue btn-red">Reply</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-form">
                                    <form>
                                        <h3>Add a comment</h3>
                                        <div className="row">
                                            <div className="form-group col-sm-12">
                                                <label for="Name">Your Comment:</label>
                                                <textarea></textarea>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label for="Name">Name:</label>
                                                <input type="text" className="form-control" id="Name"/>
                                            </div>
                                            <div className="form-group col-sm-6">
                                                <label for="email">Email address:</label>
                                                <input type="email" className="form-control" id="email"/>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <label for="website">Website:</label>
                                                <input type="text" className="form-control" id="website"/>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="comment-btn">
                                                    <Link to="#" className="btn-blue btn-red">Submit Comment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
                                                    <input type="text" className="form-control" id="search1" 
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