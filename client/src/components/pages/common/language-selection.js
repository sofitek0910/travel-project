import React, { Component } from 'react';

import bdFlug from "../../../assets/img/Bangladesh-Flag.png";
import usaFlug from "../../../assets/img/usa-flag.png";

export default class LanguageSelection extends Component {
    render() {
        return (
            <div className="btn-group language-selection">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={usaFlug} alt="EN" />
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item" type="button" href="/">Select Language</button>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" href="/"><img src={usaFlug} alt="EN" /> English</button>
                        <button className="dropdown-item" href="/"><img src={bdFlug} alt="BD" /> Bangla</button>
                    </div>
                </div>
            </div>
        )
    }
}
