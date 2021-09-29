import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import {GiAmmoBox} from "react-icons/gi";
import {AiOutlineStar, AiOutlineHeart, AiOutlineLineChart, AiOutlineUsergroupAdd} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {BsMap} from "react-icons/bs";

import comment from "../../assets/images/comment.jpg"

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-content">
                <div className="row">

                    {/* <!-- Item --> */}
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="dashboard-stat color-1">
                            <div className="dashboard-stat-content"><h4>6</h4> <span>Active Listings</span></div>
                            <div className="dashboard-stat-icon"><BsMap/></div>
                            <div className="dashboard-stat-item"><p>Someone bookmarked your listing!</p></div>
                        </div>
                    </div>

                    {/* <!-- Item --> */}
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="dashboard-stat color-2">
                            <div className="dashboard-stat-content"><h4>726</h4> <span>Total Bookings</span></div>
                            <div className="dashboard-stat-icon"><AiOutlineLineChart/></div>
                            <div className="dashboard-stat-item"><p>Someone bookmarked your listing!</p></div>
                        </div>
                    </div>


                    {/* <!-- Item --> */}
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="dashboard-stat color-3">
                            <div className="dashboard-stat-content"><h4>95</h4> <span>Total Reviews</span></div>
                            <div className="dashboard-stat-icon"><AiOutlineUsergroupAdd/></div>
                            <div className="dashboard-stat-item"><p>Someone bookmarked your listing!</p></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <div className="dashboard-stat color-4">
                            <div className="dashboard-stat-content"><h4>126</h4> <span>Bookmarks</span></div>
                            <div className="dashboard-stat-icon"><AiOutlineHeart/></div>
                            <div className="dashboard-stat-item"><p>Someone bookmarked your listing!</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12 traffic">
                        <div className="dashboard-list-box">
                            <h4 className="gray">Recent Bookings</h4>
                            <div className="table-box">
                                <table className="basic-table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Booking ID</th>
                                            <th>Destination</th>
                                            <th>No of Tickets</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01/01/2017</td>
                                            <td className="t-id">C001</td>
                                            <td>Dubai</td>
                                            <td>5</td>
                                            <td>$300.00</td>
                                        </tr>
                                        <tr>
                                            <td>01/01/2017</td>
                                            <td className="t-id">C081</td>
                                            <td>Grece - Zakynthos</td>
                                            <td>5</td>
                                            <td>$300.00</td>
                                        </tr>
                                        <tr>
                                            <td>01/01/2017</td>
                                            <td className="t-id">C001</td>
                                            <td>Bulgary - Sunny Beach</td>
                                            <td>5</td>
                                            <td>$300.00</td>
                                        </tr>
                                        <tr>
                                            <td>01/01/2017</td>
                                            <td className="t-id">C001</td>
                                            <td>France - Paris</td>
                                            <td>5</td>
                                            <td>$300.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="row">      
                    {/* <!-- Recent Activity --> */}
                    <div className="col-lg-7 col-md-12 col-xs-12 traffic">
                        <div className="dashboard-list-box with-icons margin-top-20">
                            <h4 className="gray">Recent Activities</h4>
                            <ul>
                                <li>
                                <i className="list-box-icon sl sl-icon-layers"><GiAmmoBox/></i> Your listing <strong><NavLink to="">Hotel Govendor</NavLink></strong> has been approved!
                                    <NavLink to="" className="close-list-item"><i className="fa fa-close"><RiCloseLine/></i></NavLink>
                                </li>

                                <li>
                                    <i className="list-box-icon sl sl-icon-star"><AiOutlineStar/></i> Kathy Brown left a review <div className="numerical-rating" data-rating="5.0"></div> on <strong><NavLink to="">Burger House</NavLink></strong>
                                    <NavLink to="" className="close-list-item"><i className="fa fa-close"><RiCloseLine/></i></NavLink>
                                </li>

                                <li>
                                    <i className="list-box-icon sl sl-icon-heart"><AiOutlineHeart/></i> Someone bookmarked your <strong><NavLink to="">Burger House</NavLink></strong> listing!
                                    <NavLink to="" className="close-list-item"><i className="fa fa-close"><RiCloseLine/></i></NavLink>
                                </li>

                                <li>
                                    <i className="list-box-icon sl sl-icon-star"><AiOutlineStar/></i> Kathy Brown left a review <div className="numerical-rating" data-rating="3.0"></div> on <strong><NavLink to="">Airport</NavLink></strong>
                                    <NavLink to="" className="close-list-item"><i className="fa fa-close"><RiCloseLine/></i></NavLink>
                                </li>

                                <li>
                                    <i className="list-box-icon sl sl-icon-heart"><AiOutlineHeart/></i> Someone bookmarked your <strong><NavLink to="">Burger House</NavLink></strong> listing!
                                    <NavLink to="" className="close-list-item"><i className="fa fa-close"><RiCloseLine/></i></NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-xs-12 traffic">
                        <div className="dashboard-list-box margin-top-20 user-list">
                            <h4 className="gray">User List</h4>
                            <ul>
                                <li>
                                    <div className="user-list-item">
                                        <div className="user-list-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="user-list-content">
                                            <h4>Loural Teak</h4>
                                            <span>Post Manager</span>
                                        </div>
                                        <div className="user-btns">
                                            <NavLink to="" className="button mr-2">View</NavLink>
                                            <NavLink to="#" className="button">Edit</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="user-list-item">
                                        <div className="user-list-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="user-list-content">
                                            <h4>Jim Gordon</h4>
                                            <span>Post Manager</span>
                                        </div>
                                        <div className="user-btns">
                                            <NavLink to="" className="button mr-2">View</NavLink>
                                            <NavLink to="" className="button">Edit</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="user-list-item">
                                        <div className="user-list-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="user-list-content">
                                            <h4>Loural Teak</h4>
                                            <span>Post Manager</span>
                                        </div>
                                        <div className="user-btns">
                                            <NavLink to="" className="button mr-2">View</NavLink>
                                            <NavLink to="" className="button">Edit</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="user-list-item">
                                        <div className="user-list-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="user-list-content">
                                            <h4>Loural Teak</h4>
                                            <span>Post Manager</span>
                                        </div>
                                        <div className="user-btns">
                                            <NavLink to="" className="button mr-2">View</NavLink>
                                            <NavLink to="" className="button">Edit</NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="user-list-item">
                                        <div className="user-list-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="user-list-content">
                                            <h4>Joseph Dean</h4>
                                            <span>Post Manager</span>
                                        </div>
                                        <div className="user-btns">
                                            <NavLink to="#" className="button mr-2">View</NavLink>
                                            <NavLink to="#" className="button">Edit</NavLink>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <!-- site traffic --> */}
                    {/* <div className="col-lg-4 col-md-4 mar-b-30">
                        <div className="dashboard-list-box">
                            <h4 className="gray">Site Traffic</h4>
                            <div id="chartContainer" style="height: 250px; width: 100%;"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 mar-b-30">
                        <div className="dashboard-list-box">
                            <h4 className="gray">Bar Chart</h4>
                            <div id="barchart" style="height: 250px; width: 100%;"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="dashboard-list-box">
                            <h4 className="gray">Search Engine</h4>
                            <div id="piechart" style="height: 250px; width: 100%;"></div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dashboard;