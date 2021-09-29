import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "../../../assets/css/slider-animations.css";

import slider1 from '../../../assets/images/slider/slider2.jpg';
import slider2 from '../../../assets/images/slider/slider7.jpg';
import slider3 from '../../../assets/images/slider/slider8.jpg';


const content = [
	{
		title: 'exciting schemes just a click away',
		description:
		'Amazing Santorini 7 days tour',
		button: 'VIEW OUR TOUR',
        image: slider1,
        classAdd: "right-allian-text"
		// user: 'Luan Gjokaj',
		// userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Book a ticket & Just Leave',
		description:
		'Search your next destination',
		button: 'VIEW OUR TOUR',
        image: slider2,
        classAdd: "left-allian-text"
		// user: 'Erich Behrens',
		// userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Cost friendly packages on your way',
		description:
		'We offer you better deals',
		button: 'VIEW OUR TOUR',
        image: slider3,
        classAdd: "center-allian-text"
		// user: 'Bruno Vizovskyy',
		// userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];


export default function TopSlider() {
    return (
        <div className="top-slider"> {/* autoplay= "2000" touchDisabled = "true" */}
            <Slider className="slider-wrapper" >
                {content.map((item, index) => (
                    <div className="item slider-content" key={index}>
                        <img src={item.image} alt={'image' + index}/>
                        <div className={"inner " + item.classAdd}>
                            <h2 className="text-capitalize">{item.title}</h2>
                            <h1 className="text-uppercase">{item.description}</h1>
                            <a href="/" className="btn-transparent link-decaration">{item.button}</a>
                        </div>


                        {/*<section>
                            <img src={item.userProfile} alt={item.user} />
                            <span>
                                Posted by <strong>{item.user}</strong>
                            </span>
                        </section>*/}
                    </div>
                ))}
            </Slider>
        </div>
    )
}
