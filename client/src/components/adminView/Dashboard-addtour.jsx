import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FcDocument } from 'react-icons/fc';
import { BsMap } from 'react-icons/bs';
import { AiOutlinePicture, AiFillFacebook, AiFillTwitterSquare, AiOutlineGooglePlus } from 'react-icons/ai';
import { GrDocumentText, GrAdd, GrFormClose } from 'react-icons/gr';
import { BsBook } from 'react-icons/bs';
import { FaArrowAltCircleRight } from 'react-icons/fa';

class DashboardAddTour extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="dashboard-content">
                <div className="row">
                    {/* <!-- Listings --> */}
                    <div className="col-lg-12 col-sm-12">
                        <div id="add-listing">

                            {/* <!-- Section --> */}
                            <div className="add-listing-section">

                                {/* <!-- Headline --> */}
                                <div className="add-listing-headline">
                                    <h3><FcDocument/> Basic Informations</h3>
                                </div>

                                {/* <!-- Title --> */}
                                <div className="row with-forms">
                                    <div className="col-md-12">
                                        <label>Listing Title <i className="tip" data-tip-content="Name of your business"></i></label>
                                        <input className="search-field" type="text"/>
                                    </div>
                                </div>

                                {/* <!-- Row --> */}
                                <div className="row with-forms">

                                    {/* <!-- Status --> */}
                                    <div className="col-md-6">
                                        <label>Category</label>
                                        <select className="chosen-select-no-single" >
                                            <option label="blank">Select Category</option>  
                                            <option>Eat & Drink</option>
                                            <option>Shops</option>
                                            <option>Hotels</option>
                                            <option>Restaurants</option>
                                            <option>Fitness</option>
                                            <option>Events</option>
                                        </select>
                                    </div>

                                    {/* <!-- Type --> */}
                                    <div className="col-md-6">
                                        <label>Keywords <i className="tip" data-tip-content="Maximum of 15 keywords related with your business"></i></label>
                                        <input type="text" placeholder="Keywords should be separated by commas"/>
                                    </div>

                                </div>
                                {/* <!-- Row / End --> */}
                            </div>
                            {/* <!-- Section / End --> */}

                            {/* <!-- Section --> */}
                            <div className="add-listing-section">

                                {/* <!-- Headline --> */}
                                <div className="add-listing-headline">
                                    <h3><BsMap/> Location</h3>
                                </div>

                                <div className="submit-section">

                                    {/* <!-- Row --> */}
                                    <div className="row with-forms">

                                        {/* <!-- City --> */}
                                        <div className="col-md-6">
                                            <label>City</label>
                                            <select className="chosen-select-no-single" >
                                                <option label="blank">Select City</option>  
                                                <option>New York</option>
                                                <option>Los Angeles</option>
                                                <option>Chicago</option>
                                                <option>Houston</option>
                                                <option>Phoenix</option>
                                                <option>San Diego</option>
                                                <option>Austin</option>
                                            </select>
                                        </div>

                                        {/* <!-- Address --> */}
                                        <div className="col-md-6">
                                            <label>Address</label>
                                            <input type="text" placeholder="e.g. 964 School Street"/>
                                        </div>

                                        {/* <!-- City --> */}
                                        <div className="col-md-6">
                                            <label>State</label>
                                            <input type="text"/>
                                        </div>

                                        {/* <!-- Zip-Code --> */}
                                        <div className="col-md-6">
                                            <label>Zip-Code</label>
                                            <input type="text"/>
                                        </div>

                                    </div>
                                    {/* <!-- Row / End --> */}

                                </div>
                            </div>
                            {/* <!-- Section / End --> */}

                            {/* <!-- Section --> */}
                            <div className="add-listing-section">

                                {/* <!-- Headline --> */}
                                <div className="add-listing-headline">
                                    <h3><AiOutlinePicture/> Gallery</h3>
                                </div>

                                {/* <!-- Dropzone --> */}
                                <div className="submit-section">
                                    <form action="https://www.demo.cyclonethemes.com/file-upload" className="dropzone" ></form>
                                </div>
                            </div>
                            {/* <!-- Section / End --> */}

                            {/* <!-- Section --> */}
                            <div className="add-listing-section">

                                {/* <!-- Headline --> */}
                                <div className="add-listing-headline">
                                    <h3><GrDocumentText/> Details</h3>
                                </div>

                                {/* <!-- Description --> */}
                                <div className="form">
                                    <label>Description</label>
                                    <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellCheck="true"></textarea>
                                </div>

                                {/* <!-- Row --> */}
                                <div className="row with-forms">

                                    {/* <!-- Phone --> */}
                                    <div className="col-md-4">
                                        <label>Phone <span>(optional)</span></label>
                                        <input type="text"/>
                                    </div>

                                    {/* <!-- Website --> */}
                                    <div className="col-md-4">
                                        <label>Website <span>(optional)</span></label>
                                        <input type="text"/>
                                    </div>

                                    {/* <!-- Email Address --> */}
                                    <div className="col-md-4">
                                        <label>E-mail <span>(optional)</span></label>
                                        <input type="text"/>
                                    </div>

                                </div>
                                {/* <!-- Row / End -->


                                <!-- Row --> */}
                                <div className="row with-forms">

                                    {/* <!-- Phone --> */}
                                    <div className="col-md-4">
                                        <label className="fb-input"><AiFillFacebook/> Facebook <span>(optional)</span></label>
                                        <input type="text" placeholder="https://www.facebook.com/"/>
                                    </div>

                                    {/* <!-- Website --> */}
                                    <div className="col-md-4">
                                        <label className="twitter-input"><AiFillTwitterSquare/> Twitter <span>(optional)</span></label>
                                        <input type="text" placeholder="https://www.twitter.com/"/>
                                    </div>

                                    {/* <!-- Email Address --> */}
                                    <div className="col-md-4">
                                        <label className="gplus-input"><AiOutlineGooglePlus/> Google Plus <span>(optional)</span></label>
                                        <input type="text" placeholder="https://plus.google.com/"/>
                                    </div>

                                </div>
                                {/* <!-- Row / End --> */}


                                {/* <!-- Checkboxes --> */}
                                <label className="margin-top-30 margin-bottom-10">Amenities <span>(optional)</span></label>
                                <div className="checkboxes in-row margin-bottom-20">

                                    <input id="check-a" type="checkbox" name="check"/>
                                    <label htmlFor="check-a">Elevator in building</label>

                                    <input id="check-b" type="checkbox" name="check"/>
                                    <label htmlFor="check-b">Friendly workspace</label>

                                    <input id="check-c" type="checkbox" name="check"/>
                                    <label htmlFor="check-c">Instant Book</label>

                                    <input id="check-d" type="checkbox" name="check"/>
                                    <label htmlFor="check-d">Wireless Internet</label>

                                    <input id="check-e" type="checkbox" name="check" />
                                    <label htmlFor="check-e">Free parking on premises</label>

                                    <input id="check-f" type="checkbox" name="check" />
                                    <label htmlFor="check-f">Free parking on street</label>

                                    <input id="check-g" type="checkbox" name="check"/>
                                    <label htmlFor="check-g">Smoking allowed</label>    

                                    <input id="check-h" type="checkbox" name="check"/>
                                    <label htmlFor="check-h">Events</label>

                                </div>
                                {/* <!-- Checkboxes / End --> */}
                            </div>
                            {/* <!-- Section / End --> */}

                            {/* <!-- Section --> */}
                            <div className="add-listing-section">

                                {/* <!-- Headline --> */}
                                <div className="add-listing-headline">
                                    <h3><BsBook/> Pricing</h3>
                                    {/* <!-- Switcher --> */}
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked/>
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                                {/* <!-- Switcher ON-OFF Content --> */}
                                <div className="switcher-content">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <table id="pricing-list-container">
                                                <tbody>
                                                    <tr className="pricing-list-item pattern">
                                                        <td>
                                                            <div className="fm-move"><GrAdd/></div>
                                                            <div className="fm-input pricing-name"><input type="text" placeholder="Title" /></div>
                                                            <div className="fm-input pricing-ingredients"><input type="text" placeholder="Description" /></div>
                                                            <div className="fm-input pricing-price"><input type="text" placeholder="Price" data-unit="USD" /></div>
                                                            <div className="fm-close"><Link className="delete" to="#"><GrFormClose/></Link></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <Link to="#" className="button add-pricing-list-item">Add Item</Link>
                                            <Link to="#" className="button add-pricing-submenu">Add Category</Link>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- Switcher ON-OFF Content / End --> */}
                            </div>
                            {/* <!-- Section / End --> */}


                            <Link to="#" className="button preview">Preview <FaArrowAltCircleRight/></Link>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }

}


export default DashboardAddTour