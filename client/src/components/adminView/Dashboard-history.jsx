import React, { Component } from "react";
import { Link } from "react-router-dom";


class DashboardHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="dashboard-content">

                <div className="row">
                    
                    {/* <!-- Listings --> */}
                    <div className="col-lg-12 col-md-12">
                        <div className="dashboard-list-box">
                            <h4 className="gray">History</h4>
                            <div className="table-box">
                            <table className="basic-table booking-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Destination</th>
                                        <th>Price</th>
                                        <th className="textright">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                    <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                    <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                    <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>01/01/2017</td>
                                        <td>U.A.E. - Dubai</td>
                                        <td>$300.00</td>
                                        <td className="textright">
                                            <div className="dropdown">
                                                <button className="button gray dropdown-toggle" type="button" id="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="glyphicon glyphicon-plus"></span>
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="">
                                                <Link className="dropdown-item" to="#">Send Email</Link>
                                                    <Link className="dropdown-item" to="#">Print PDF</Link>
                                                    <Link className="dropdown-item del" to="#">Delete</Link>
                                                </div>
                                            </div>
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

export default DashboardHistory;