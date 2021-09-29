import React, { Component } from 'react';

export default class TourCountdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRemoveInterval: false
        };
    }
    componentDidMount() {
        this.countdownTime();
    };

    countdownTime = () => {
        let instance = this,
        countDownDate = new Date("May 10, 2021 11:10:09").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            if (instance.state.isRemoveInterval) {
                clearInterval(x);
            } else {
                // Get todays date and time
                let now = new Date().getTime();
        
                // Find the distance between now and the count down date
                let distance = countDownDate - now;
        
                // Time calculations for days, hours, minutes and seconds
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                // Display the result in the element with id="demo"
                let element = document.getElementById("demo");
                if (element) {
                    element.innerHTML = days + "<span>DAYS</span> " + hours + "<span>HOURS</span> "
                    + minutes + "<span>MINS</span> " + seconds + "<span>SECS</span> ";
                }

                // If the count down is finished, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    let element = document.getElementById("demo");
                    if (element) element.innerHTML = "Today Is The Day";
                }
            }
        }, 1000);
    };

    componentWillUnmount() {
        // alert("The component named Header is about to be unmounted.");
        this.setState({isRemoveInterval: true});
    };

    render() {
        return (
            <section className="countdown-section">
                <div className="container">
                    <div className="countdown-title">
                        <h2>Special Tour in May, Discover <span>Thailand</span> for 50 Customers with <span>Discount 30%</span></h2>
                        <p>It’s limited seating! Hurry up</p>
                    </div>
                    <div className="countdown countdown-container container">
                        <p id="demo"></p>
                    </div>
                </div>
                <div className="testimonial-overlay"></div>
            </section>
        )
    }
}
