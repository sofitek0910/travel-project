import React, { Component } from 'react';

import LanguageSelection from "../common/language-selection";

import logo from "../../../assets/img/Yatra-01.png";

export default class NavigationBar extends Component {
    render() {
        return (
            <div className="container navigation-bar">
                <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-sticky">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="logo float-left">
                        <a className="navbar-brand" href="/"><img src={logo} alt="Logo" /></a>
                    </div>

                   <div className="collapse navbar-collapse float-right" id="navbarTogglerDemo03">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">DESTINATION</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">CONTACT US</a>
                            </li>
                            <LanguageSelection></LanguageSelection>
                        </ul>
                    </div> 
                </nav>
            </div>
        
        )
    }
}


