import React, { Component } from "react";
import { Link } from "react-router-dom";

import {BsPencil} from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai";

class DashboardBookingList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="dashboard-content">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-xs-12">
                        <div className="dashboard-list-box">
                            <h4 className="gray">All Bookings</h4>
                            <div className="table-box">
                            <table className="basic-table booking-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Booking ID</th>
                                        <th>Destination</th>
                                        <th>No of Tickets</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ricky Ponting</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Greece - Zakynthos</td>
                                        <td>7</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="cancel t-box">Cancelled</span></td>
                                        <td>
                                            <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Micheal</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C023</td>
                                        <td>Bulgary - Sunny Beach</td>
                                        <td>2</td>
                                        <td><span className="unpaid t-box">Unpaid</span></td>
                                        <td><span className="approved t-box">Approved</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jim Morrison</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">E453</td>
                                        <td>Washington</td>
                                        <td>11</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Michelle</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Tokyo, Japan</td>
                                        <td>3</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ricky Ponting</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Brussels</td>
                                        <td>7</td>
                                        <td><span className="unpaid t-box">Unpaid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ricky Ponting</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Greece - Zakynthos</td>
                                        <td>7</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="cancel t-box">Cancelled</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Micheal</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C023</td>
                                        <td>Bulgary - Sunny Beach</td>
                                        <td>2</td>
                                        <td><span className="unpaid t-box">Unpaid</span></td>
                                        <td><span className="approved t-box">Approved</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Jim Morrison</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">E453</td>
                                        <td>Washington</td>
                                        <td>11</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Michelle</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Tokyo, Japan</td>
                                        <td>3</td>
                                        <td><span className="paid t-box">Paid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ricky Ponting</td>
                                        <td>2019/01/18</td>
                                        <td className="t-id">C253</td>
                                        <td>Brussels</td>
                                        <td>7</td>
                                        <td><span className="unpaid t-box">Unpaid</span></td>
                                        <td><span className="pending t-box">Pending</span></td>
                                        <td>
                                        <Link to="#" className="button gray"><BsPencil/></Link>
                                            <Link to="#" className="button gray"><AiOutlineCloseCircle/></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        <div className="pagination-container">
                            <nav className="pagination">
                                <ul>
                                    <li><Link to="#" className="current-page">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#"><i className="sl sl-icon-arrow-right"></i></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardBookingList;