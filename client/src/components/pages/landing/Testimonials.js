import React, { Component } from 'react';
import { GiCutDiamond } from "react-icons/gi";
import Carousel from 'react-bootstrap/Carousel'

import testemonial1 from "../../../assets/images/testemonial1.jpg"
import testemonial2 from "../../../assets/images/testemonial2.jpg"
import testemonial3 from "../../../assets/images/testemonial3.jpg"
import testemonial4 from "../../../assets/images/testemonial4.jpg"
import testemonial5 from "../../../assets/images/testemonial5.jpg"

export default class Testemonial extends Component {
    render() {
        return (
            <section className="testimonials">
                <div className="section-title text-center">
                    <h2>Best Rated Travel Agency</h2>
                    <div className="section-icon section-icon-white">
                        <GiCutDiamond/>
                    </div>       
                </div>
                
                <Carousel className="testimonials-slider">
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3 pt-5">
                                <img className="d-block"
                                    src={testemonial1}
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-9 pt-5">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <h5>Susan Doe, Houston</h5>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3 pt-5">
                                <img className="d-block"
                                    src={testemonial2}
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-9 pt-5">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <h5>Susan Doe, Houston</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3 pt-5">
                                <img className="d-block"
                                    src={testemonial3}
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-9 pt-5">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <h5>Susan Doe, Houston</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3 pt-5">
                                <img className="d-block"
                                    src={testemonial4}
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-9 pt-5">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <h5>Susan Doe, Houston</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-3 pt-5">
                                <img className="d-block"
                                    src={testemonial5}
                                    alt="Third slide"
                                />
                            </div>
                            <div className="col-9 pt-5">
                                <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur adipiscing luctus massa nteger ut purus ac augue commodo commodo unc nec mi eu justo tempor consectetuer tiam.</p>
                                <h5>Susan Doe, Houston</h5>
                            </div>
                        </div>
                    </Carousel.Item>
                    {/* <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                            <img className="d-block w-100"
                                src={testemonial2}
                                alt="Third slide"
                            />
                            </div>
                            <div className="col-8">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                            <img className="d-block w-100"
                                src={testemonial3}
                                alt="Third slide"
                            />
                            </div>
                            <div className="col-8">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                            <img className="d-block w-100"
                                src={testemonial4}
                                alt="Third slide"
                            />
                            </div>
                            <div className="col-8">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-4">
                            <img className="d-block w-100"
                                src={testemonial5}
                                alt="Third slide"
                            />
                            </div>
                            <div className="col-8">
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                            </div>
                        </div>
                    </Carousel.Item> */}
                </Carousel>
            </section>
        )
    }
}