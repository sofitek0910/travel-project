import React from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { logout } from '../../actions/auth';

import {AiOutlineSetting, AiOutlineUser, AiOutlinePlusCircle, AiOutlineUnorderedList, AiOutlineFolder, AiOutlineLogout} from "react-icons/ai";
import {FiLayers} from "react-icons/fi";

const Sidebar = ({auth: {isAuthenticated, user}, logout}) => {
    const className = (location, path) => {
        let className = '';
        if (location === path) className = "active";
        return className;
    }

    if (!isAuthenticated) {
        return <Redirect to="/" />
    };

    return (
        <div className="dashboard-nav">
            <div className="dashboard-nav-inner">
                <ul>
                    <li className={className(window.location.pathname, '/admin/dashboard')}>
                        <Link to="/admin/dashboard">
                            <span className="mr-2"><AiOutlineSetting/></span>
                            Dashboard
                        </Link>
                    </li>
                    <li className={className(window.location.pathname, '/admin/profile')}>
                        <Link to="/admin/profile">
                            <span className="mr-2"><AiOutlineUser/></span>
                            Edit Profile
                        </Link>
                    </li>
                    <li className={className(window.location.pathname, '/admin/addTour')}>
                        <Link to="/admin/addTour">
                            <span className="mr-2"><AiOutlinePlusCircle/></span>
                            Add Tour
                        </Link>
                    </li>
                    {/* className="active" */}
                    <li className={className(window.location.pathname, '/admin/tourListing/active')}>
                        <Link to="/admin/tourListing/active">
                            <span className="mr-2"><FiLayers/></span>
                            Tour Listing
                        </Link>
                        <ul>
                            <li>
                                <Link to="/admin/tourListing/active">
                                    Active <span className="nav-tag green">6</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/tourListing/pending">
                                    Pending <span className="nav-tag yellow">1</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin/tourListing/expired">
                                    Expired <span className="nav-tag red">2</span>
                                </Link>
                            </li>
                        </ul>   
                    </li>
                    <li className={className(window.location.pathname, '/admin/bookingListing')}>
                        <Link to="/admin/bookingListing">
                            <span className="mr-2"><AiOutlineUnorderedList/></span>
                            Booking List
                        </Link>
                    </li>
                    <li className={className(window.location.pathname, '/admin/bookingHistory')}>
                        <Link to="/admin/bookingHistory">
                            <span className="mr-2"><AiOutlineFolder/></span>
                            History
                        </Link>
                    </li>
                    <li>
                        <Link onClick={logout} to="#!">
                            <span className="mr-2"><AiOutlineLogout/></span>
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {logout})(Sidebar);