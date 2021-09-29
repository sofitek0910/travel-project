import React, { Component } from 'react'

import { FaEnvelope, FaPhone, FaUserPlus, FaUnlockAlt } from "react-icons/fa";

export default class UpperHeader extends Component {
    render() {
        return (
            <header>
                <div className="upper-head clearfix">
                    <div className="container">
                        <div className="contact-info">
                            <p><FaPhone/> Phone: (+880)-345-6789</p>
                            <p><FaEnvelope/>  Mail: tourntravel@testmail.com</p>
                        </div>

                        <div className="login-btn float-right">
                            <a href="/"><FaUserPlus/> Register</a>
                            <a href="/"><FaUnlockAlt/> Login</a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
