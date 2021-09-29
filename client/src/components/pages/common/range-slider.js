import React, { Component } from 'react';
import Slider from "nouislider";

import 'nouislider/distribute/nouislider.css';

export default class RangeSlider extends Component {

    constructor(props){
        super(props);
        this.state = {
          data: [0, 1000], 
          range: { min: 0, max: 10000 }
        }
      }
    
    componentDidMount() {
      let slider = document.getElementById('sliderDouble');

          if (
            !document.getElementById("sliderDouble").classList.contains("noUi-target")
          ) {
            Slider.create(document.getElementById("sliderDouble"), {
              start: [0, 10000],
              step: 1000,
              connect: [true, true, true],
              range: this.state.range,
              tooltips: true,
            });
          }

          slider.noUiSlider.on('update', function(values, handle) {
            // console.log("values", values);
            // console.log("handle", handle)
        });
    };
    render() {
        return (
            <div className="range-slider">
               <div className="slider-primary" id="sliderDouble"
               ></div>
            </div>
      )
    }
}
