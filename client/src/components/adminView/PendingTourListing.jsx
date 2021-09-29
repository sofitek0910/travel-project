import React, { Component } from "react";
import TourListing from "./TourListing";


class PendingTourListing extends Component {
    render() {
        return (
            <div className="dashboard-content">
                <TourListing context="pending"/>
            </div>
        )
    }
}

export default PendingTourListing;