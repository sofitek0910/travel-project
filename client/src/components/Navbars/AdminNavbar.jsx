import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import YatraWhite from '../../assets/images/Yatra-white.png';
import comment from '../../assets/images/comment.jpg';

import {AiOutlineSetting } from 'react-icons/ai';
import {BsBell} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

class AdminNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSettingOpen: false,
            isMailOpen: false,
            isNotificationOpen: false
        }
    }

    toggleOpenSetting = () => this.setState({ isSettingOpen: !this.state.isOpen });
    toggleOpenMail = () => this.setState({isMailOpen: !this.state.isMailOpen});
    toggleOpenNotification = () => this.setState({isNotificationOpen : !this.state.isNotificationOpen});

    render() {
        const menuClass = `dropdown-menu${this.state.isSettingOpen ? " show" : ""}`;
        const menuMailClass = `dropdown-menu notification-menu${this.state.isMailOpen ? " show" : ""}`;
        const menuNotificationClass = `dropdown-menu notification-menu${this.state.isNotificationOpen ? " show" : ""}`;

        return (
            <div className="dashboard-sticky-nav">
                <div className="content-left float-left">
                    <NavLink to="">
                        <img src={YatraWhite} alt="logo"/>
                    </NavLink>
                </div>
                <div className="content-right float-right">
                    {/* <div className="search-bar">
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" id="search" placeholder="Search Now" />
                                <a href="#"><span className="search_btn"><AiOutlineSearch/></span></a>
                            </div>
                        </form>
                    </div> */}
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            <div className="profile-sec" onClick={this.toggleOpenSetting}>
                                <div className="dash-image">
                                    <img src={comment} alt="" />
                                </div>
                                <div className="dash-content">
                                    <h4>Loural Teak</h4>
                                    <span>Post Manager</span>
                                </div>
                            </div>
                        </div>
                        <ul className={menuClass}>
                            <li><NavLink to=""><AiOutlineSetting/> Settings</NavLink></li>
                            <li><NavLink to=""><AiOutlineSetting/> Profile</NavLink></li>
                            <li><NavLink to=""><AiOutlineSetting/> Change Password</NavLink></li>
                            <li><NavLink to=""><AiOutlineSetting/> Logout</NavLink></li>
                        </ul>
                    </div>
                    
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            <div className="dropdown-item" onClick={this.toggleOpenMail}>
                                <FiMail/>
                                <span className="notify">3</span>
                            </div>
                        </div>
                        <div className={menuMailClass}>
                        <h4> 23 Messages</h4>
                        <ul>
                            <li>
                                <NavLink to="">
                                    <div className="notification-item">
                                        <div className="notification-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="notification-content">
                                            <p>You have a notification.</p><span className="notification-time">2 hours ago</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="notification-item">
                                        <div className="notification-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="notification-content">
                                            <p>You have a notification.</p><span className="notification-time">2 hours ago</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="">
                                    <div className="notification-item">
                                        <div className="notification-image">
                                            <img src={comment} alt=""/>
                                        </div>
                                        <div className="notification-content">
                                            <p>You have a notification.</p><span className="notification-time">2 hours ago</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                        <p className="all-noti"><NavLink to="">See all messages</NavLink></p>
                        </div>
                    </div>
                    
                    <div className="dropdown"> 
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            <div className="dropdown-item" onClick={this.toggleOpenNotification}>
                                <BsBell value={{ style: { height: '25px', width: '25px'} }}/>
                                <span className="notify">3</span>
                            </div>
                        </div>
                        <div className={menuNotificationClass}>
                            <h4> 599 Notifications</h4>
                            <ul>
                                <li>
                                    <NavLink to="">
                                        <div className="notification-item">
                                            <div className="notification-image">
                                                <img src={comment} alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p><span className="notification-time">2 hours ago</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <div className="notification-item">
                                            <div className="notification-image">
                                                <img src={comment} alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p><span className="notification-time">2 hours ago</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="">
                                        <div className="notification-item">
                                            <div className="notification-image">
                                                <img src={comment} alt=""/>
                                            </div>
                                            <div className="notification-content">
                                                <p>You have a notification.</p>
                                                <span className="notification-time">2 hours ago</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                            <p className="all-noti"><NavLink to="">See all notifications</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminNavbar;