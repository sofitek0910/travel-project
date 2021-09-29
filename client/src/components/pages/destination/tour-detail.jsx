import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Footer from '../common/footer';
import HeaderNavbar from '../common/header-navigation';

export default class TourDetail extends Component {
    render() {
        return (
            <>
                <HeaderNavbar/>
                <section className="breadcrumb-outer text-center">
                    <div className="container">
                        <div className="breadcrumb-content">
                            <h2>Everest Base Camp Trek</h2>
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link to="/destination">Destinations</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">EBC Trek</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="section-overlay"></div>
                </section>

                <section className="main-content detail">
                    <div className="container">
                        <div className="row">
                            <div id="content" className="col-md-8">
                                <div className="description detail-box">
                                    <div className="detail-title">
                                        <h3>Description</h3>
                                    </div>
                                    <div className="description-content">
                                        <p>Brazil’s view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Rio de Janeiro, Iguassu Falls, and Buenos Aires will leave you with vacation memories you’ll cherish for life.</p>
                                        <table>
                                            <thead>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="title">Departure</td>
                                                    <td><i className="fa fa-map-marker" aria-hidden="true"></i> San Francisco International Airport</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Departure Time</td>
                                                    <td><i className="fa fa-clock-o" aria-hidden="true"></i> Please arrive by 10:20 AM for a prompt departure at 10:50 AM</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Maximum travellers</td>
                                                    <td><i className="fa fa-user-o" aria-hidden="true"></i> 23</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Languages</td>
                                                    <td><i className="fa fa-file-audio-o" aria-hidden="true"></i> English, Thai, Malayt</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Includes</td>
                                                    <td>
                                                        <ul>
                                                            <li><i className="fa fa-check" aria-hidden="true"></i> Airfare</li>
                                                            <li><i className="fa fa-check" aria-hidden="true"></i> Transportation</li>
                                                            <li><i className="fa fa-check" aria-hidden="true"></i> Professional Guide</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Excludes</td>
                                                    <td className="excludes">
                                                        <ul>
                                                            <li><i className="fa fa-times" aria-hidden="true"></i> Departure Taxes</li>
                                                            <li><i className="fa fa-times" aria-hidden="true"></i> Entry Fees</li>
                                                            <li><i className="fa fa-times" aria-hidden="true"></i> Insurance</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Popular Places</td>
                                                    <td>
                                                        <ul>
                                                            <li><i className="fa fa-map-marker" aria-hidden="true"></i> Eiffel Tower</li>
                                                            <li><i className="fa fa-map-marker" aria-hidden="true"></i> Eiffel Tower</li>
                                                            <li><i className="fa fa-map-marker" aria-hidden="true"></i> Eiffel Tower</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="location-map detail-box">
                                    <div className="detail-title">
                                        <h3>Location Map</h3>
                                    </div>
                                    <div className="map-frame">
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28185.510535377554!2d86.90746548742861!3d27.98811904127681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2z4KS44KSX4KSw4KSu4KS-4KSl4KS-!5e0!3m2!1sne!2snp!4v1544516755007" style="border:0" allowfullscreen></iframe> */}
                                    </div>
                                </div>
                                <div className="detail-timeline detail-box">
                                    <div className="detail-title">
                                        <h3>Tour Timeline</h3>
                                    </div>
                                    <div className="timeline-content">
                                        <ul className="timeline">
                                            <li>
                                                <div className="direction-r">
                                                    <div className="day-wrapper">
                                                        <span>1</span>
                                                    </div>
                                                    <div className="flag-wrapper">
                                                        <span className="flag">Day 1 - 2 : Flights to Kathmandu.</span>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Passenger flights to Lukla. Begin the trek through the Khumbu to Base Camp.Tourist attractions people foreign sleep overnight housing. Gerimrany group discount tour operator. Airplane couchsurfing Moi scow ma ps uncharted luxury train guest tour operator German y busre laxation. Paris overnight Japan Tripit territory international carren tal Pacific outdoor Turkey. Country international to urist attractions mil es train Moscow guide. Japan horse riding money Bacel ona Buda pest yach.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="direction-r">
                                                    <div className="day-wrapper">
                                                        <span>3</span>
                                                    </div>
                                                    <div className="flag-wrapper">
                                                        <span className="flag">Day 3 : Arrive Kathmandu</span>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Arrive in Kathmandu and relax while enjoying the color and energy of Nepal’s capital city. Duffels of personal climbing gear and high-altitude clothing will be collected for the cargo flights to Lukla and will be waiting for you at Base Camp. </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="direction-r">
                                                    <div className="day-wrapper">
                                                        <span>4</span>
                                                    </div>
                                                    <div className="flag-wrapper">
                                                        <span className="flag">Day 4 - 5 : Enjoy Kathmandu</span>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Enjoy Kathmandu with a city tour and attend any governmental and media affairs involving team members.Tourist attractions people foreign sleep overnight housing. Gerimrany group discount tour operator. Airplane couchsurfing Moi scow ma ps uncharted luxury train guest tour operator German y busre laxation. Paris overnight Japan Tripit territory international carren tal Pacific outdoor Turkey. Country international to urist attractions mil es train Moscow guide. Japan horse riding money Bacel ona Buda pest yach.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="direction-r">
                                                    <div className="day-wrapper">
                                                        <span>6</span>
                                                    </div>
                                                    <div className="flag-wrapper">
                                                        <span className="flag">Day 6 : Fly to Lukla</span>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Passenger flights to Lukla. Begin the trek through the Khumbu to Base Camp.Tourist attractions people foreign sleep overnight housing. Gerimrany group discount tour operator. Airplane couchsurfing Moi scow ma ps uncharted luxury train guest tour operator German y busre laxation. Paris overnight Japan Tripit territory international carren tal Pacific outdoor Turkey. Country international to urist attractions mil es train Moscow guide. Japan horse riding money Bacel ona Buda pest yach.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="direction-r">
                                                    <div className="day-wrapper">
                                                        <span>7</span>
                                                    </div>
                                                    <div className="flag-wrapper">
                                                        <span className="flag">Day 7 - 15 : Trek to Base Camp</span>
                                                    </div>
                                                    <div className="desc">
                                                        <p>Trek to Base Camp, taking plenty of time to acclimatize and to visit the Sherpa families and support facilities that will become increasingly important during our expedition. We will spend several days in Namche ahead of most trekkers, and will visit the monasteries in Tengboche and Pangboche. Additional acclimatization days are scheduled at Namche (11,400ft/3,475m) and Pheriche (14,000ft/4,267m).</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="top-attractions detail-box">
                                    <div className="detail-title">
                                        <h3>Hotels and Availabilities</h3>
                                    </div>
                                    <div className="top-attraction-content">
                                        <div className="att-item clearfix">
                                            <div className="att-image">
                                                <img src="images/bucket1.jpg" alt="Images"/>
                                            </div>
                                            <div className="att-content">
                                                <div className="att-content-left">
                                                    <h4>Phulay Bay Resort</h4>
                                                    <ul>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Wifi</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Parking</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Swimming Pool</li>
                                                    </ul>
                                                </div>
                                                <div className="att-content-right">
                                                    <p>Starting from <span className="bold">Rs. 1500</span></p>
                                                    <p>1 night / 3 person</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="att-item clearfix">
                                            <div className="att-image">
                                                <img src="images/bucket2.jpg" alt="Images"/>
                                            </div>
                                            <div className="att-content">
                                                <div className="att-content-left">
                                                    <h4>Phulay Bay Resort</h4>
                                                    <ul>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Wifi</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Parking</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Swimming Pool</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Daily Housekeeping</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Restaurant Bar and Lounge</li>
                                                    </ul>
                                                </div>
                                                <div className="att-content-right">
                                                    <p>Starting from <span className="bold">Rs. 1500</span></p>
                                                    <p>1 night / 3 person</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="att-item clearfix">
                                            <div className="att-image">
                                                <img src="images/bucket3.jpg" alt="Images"/>
                                            </div>
                                            <div className="att-content">
                                                <div className="att-content-left">
                                                    <h4>Phulay Bay Resort</h4>
                                                    <ul>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Wifi</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Free Parking</li>
                                                        <li><i className="fa fa-check" aria-hidden="true"></i> Swimming Pool</li>
                                                    </ul>
                                                </div>
                                                <div className="att-content-right">
                                                    <p>Starting from <span className="bold">Rs. 1500</span></p>
                                                    <p>1 night / 3 person</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comments detail-box">
                                    <div className="detail-title">
                                        <h3>Comments</h3>
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-item">
                                            <div className="row">
                                                <div className="col-md-3 col-sm-4">
                                                    <div className="comment-image">
                                                        <img src="images/comment.jpg" alt="Images"/>
                                                        <h4><Link to="#">Peter Parker</Link></h4>
                                                        <span className="comment-date">(18 Dec 2018)</span>
                                                        <Link className="btn-blue btn-red" to="#">Reply</Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-9 col-sm-8">
                                                    <div className="comment-desc">
                                                        <span className="travel-date"> Travelled On : 25 March 2018</span>
                                                        <div className="deal-rating">
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star checked"></span>
                                                            <span className="fa fa-star-o"></span>
                                                            <span className="fa fa-star-o"></span>
                                                        </div>
                                                        <p>Trek to Base Camp, taking plenty of time to acclimatize and to visit the Sherpa families and support facilities that will become increasingly important during our expedition. We will spend several days in Namche ahead of most trekkers, and will visit the monasteries in Tengboche and Pangboche. </p>
                                                    </div>
                                                    <div className="comment-item comment-reply">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-4">
                                                                <div className="comment-image">
                                                                    <img src="images/comment.jpg" alt="Images"/>
                                                                    <h4><Link to="#">Peter Parker</Link></h4>
                                                                    <span className="comment-date">(18 Dec 2018)</span>
                                                                    <Link className="btn-blue btn-red" to="#">Reply</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9 col-sm-8">
                                                                <div className="comment-desc">
                                                                    <span className="travel-date"> Travelled On : 25 March 2018</span>
                                                                    <div className="deal-rating">
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star checked"></span>
                                                                        <span className="fa fa-star-o"></span>
                                                                        <span className="fa fa-star-o"></span>
                                                                    </div>
                                                                    <p>Trek to Base Camp, taking plenty of time to acclimatize and to visit the Sherpa families and support facilities that will become increasingly important during our expedition. We will spend several days in Namche ahead of most trekkers, and will visit the monasteries in Tengboche and Pangboche. </p>
                                                                </div>
                                                            </div>
                                                        </div>     
                                                    </div>
                                                    <div className="comment-item comment-reply">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-4">
                                                                <div className="comment-image">
                                                                    <img src="images/comment.jpg" alt="Images"/>
                                                                    <h4><Link to="#">Peter Parker</Link></h4>
                                                                    <span className="comment-date">(18 Dec 2018)</span>
                                                                    <Link className="btn-blue btn-red" to="#">Reply</Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9 col-sm-8">
                                                                <div className="comment-desc">
                                                                    <p>Trek to Base Camp, taking plenty of time to acclimatize and to visit the Sherpa families and support facilities that will become increasingly important during our expedition. We will spend several days in Namche ahead of most trekkers, and will visit the monasteries in Tengboche and Pangboche. </p>
                                                                </div>
                                                            </div>
                                                        </div>     
                                                    </div>
                                                </div>
                                            </div>     
                                        </div>
                                    </div>
                                </div>
                                <div className="comments-form detail-box">
                                    <div className="detail-title">
                                        <h3>Add Your Comment</h3>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="textarea form-group col-md-12">
                                                <label for="Name">Your Comment:</label>
                                                <textarea></textarea>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="Name">Name:</label>
                                                <input type="email" className="form-control" id="Name"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label for="email">Email address:</label>
                                                <input type="email" className="form-control" id="email"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="website">Website:</label>
                                                <input type="email" className="form-control" id="website"/>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="comment-btn">
                                                    <Link to="#" className="btn-blue btn-red">Submit Comment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Left Side bar  */}

                            <div id="sidebar-sticky" className="col-md-4">
                                <aside className="detail-sidebar sidebar-wrapper">
                                    <div className="sidebar-item sidebar-item-dark">
                                        <div className="detail-title">
                                            <h3>Book this tour</h3>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="form-group col-md-12">
                                                    <input type="text" className="form-control" id="Name1" 
                                                    placeholder="Name"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="email" className="form-control" id="email1" 
                                                    placeholder="Email"/>
                                                </div>
                                                <div className="form-group col-md-6 col-left-padding">
                                                    <input type="number" className="form-control" id="phnumber1" 
                                                    placeholder="Phone Number"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <input type="date" className="form-control" 
                                                    id="date"/>
                                                </div>
                                                <div className="form-group col-md-6 col-left-padding">
                                                    <input type="number" className="form-control" id="phnumber"/>
                                                </div>
                                                <div className="textarea col-md-12">
                                                    <textarea placeholder="Message"></textarea>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="comment-btn">
                                                        <Link to="#" className="btn-blue btn-red">Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <div className="sidebar-item">
                                        <div className="detail-title">
                                            <h3>Popular Packages</h3>
                                        </div>
                                        <div className="sidebar-content sidebar-slider">
                                            <div className="sidebar-package">
                                                <div className="sidebar-package-image">
                                                    <img src="images/detailslider1.jpg" alt="Images"/>
                                                </div>
                                                <div className="destination-content sidebar-package-content">
                                                    <h4><a href="tour-detail.html">Royal Caribbean Cruises</a></h4>
                                                    <div className="deal-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star-o"></span>
                                                        <span className="fa fa-star-o"></span>
                                                    </div>
                                                    <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span> </p>
                                                    <a href="#" className="btn-blue btn-red">Book Now</a>
                                                </div>
                                            </div>
                                            <div className="sidebar-package">
                                                <div className="sidebar-package-image">
                                                    <img src="images/detailslider2.jpg" alt="Images"/>
                                                </div>
                                                <div className="destination-content sidebar-package-content">
                                                    <h4><a href="tour-detail.html">Bahamas Royal Cruises</a></h4>
                                                    <div className="deal-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star-o"></span>
                                                        <span className="fa fa-star-o"></span>
                                                    </div>
                                                    <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span> </p>
                                                    <a href="#" className="btn-blue btn-red">Book Now</a>
                                                </div>
                                            </div>
                                            <div className="sidebar-package">
                                                <div className="sidebar-package-image">
                                                    <img src="images/detailslider3.jpg" alt="Images"/>
                                                </div>
                                                <div className="destination-content sidebar-package-content">
                                                    <h4><a href="tour-detail.html">Royal Caribbean Cruises</a></h4>
                                                    <div className="deal-rating">
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star checked"></span>
                                                        <span className="fa fa-star-o"></span>
                                                        <span className="fa fa-star-o"></span>
                                                    </div>
                                                    <p><i className="flaticon-time"></i> 5 days starts from <span className="bold">$659</span> </p>
                                                    <a href="#" className="btn-blue btn-red">Book Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="sidebar-item sidebar-helpline">
                                        <div className="sidebar-helpline-content">
                                            <h3>Any Questions?</h3>
                                            <p>Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sedpr do eiusmod tempor incididunt ut.</p>
                                            <p><i className="flaticon-phone-call"></i> (012)-345-6789</p>
                                            <p><i className="flaticon-mail"></i> tourntravel@testmail.com</p>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer/>
            </>
        )
    }
}
