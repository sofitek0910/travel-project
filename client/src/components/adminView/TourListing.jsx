import React, { Component } from "react";
import {Link} from "react-router-dom";
import faker from "faker";


class TourListing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
        console.log('====================================');
        console.log("props", props.context);
        console.log('====================================');
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="dashboard-list-box dash-list margin-top-0">
                        <div className="row">
                        {/* <!-- list start --> */}
                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <a href="dashboard-listdetail.html"><h3>Sticky Band</h3></a>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- list end --> */}
                            {/* <!-- list start --> */}
                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <a href="dashboard-listdetail.html"><h3>Sticky Band</h3></a>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- list end --> */}

                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <a href="dashboard-listdetail.html"><h3>Sticky Band</h3></a>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <a href="dashboard-listdetail.html"><h3>Sticky Band</h3></a>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <a href="dashboard-listdetail.html"><h3>Sticky Band</h3></a>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="list-box-listing">
                                    <div className="list-box-listing-img">
                                        <Link to="#"><img src={faker.image.image()} alt=""/></Link>
                                    </div>
                                    <div className="list-box-listing-content">
                                        <div className="inner">
                                            <Link to=""><h3>Sticky Band</h3></Link>
                                            <span>Bishop Avenue, New York</span>
                                            <div className="star-rating" data-rating="5.0">
                                                <div className="rating-counter">(23 reviews)</div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus, quam vel interdum lacinia, lacus justo rutrum</p>
                                        </div>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-pencil"></i> Edit</Link>
                                        <Link to="#" className="button gray"><i className="sl sl-icon-close"></i> Delete</Link>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Pagination --> */}
                            <div className="clearfix"></div>
                            <div className="col-sm-12 pagination-container">
                                <nav className="pagination">
                                    <ul>
                                        <li><Link to="#"><i className="sl sl-icon-arrow-left"></i></Link></li>
                                        <li><Link to="#" className="current-page">1</Link></li>
                                        <li><Link to="#">2</Link></li>
                                        <li><Link to="#"><i className="sl sl-icon-arrow-right"></i></Link></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- Pagination / End --> */}

                        </div>
                    </div>
                    </div>  

            </div>
        )
    }
}

export default TourListing;