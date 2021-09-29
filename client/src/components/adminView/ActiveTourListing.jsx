import React, { Component } from "react";
import TourListing from "./TourListing";

class ActiveTourListing extends Component {
    render() {
        return (
        <div className="dashboard-content">
            <TourListing context="active"/>
        </div>)
    }
}

export default ActiveTourListing;