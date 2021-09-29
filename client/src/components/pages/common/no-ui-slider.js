import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

export default class NoSlider extends React.Component {
    onChangeSlide(data) {
        console.log(data) // logs the value
      }
    
    render() {
        return (
            <Nouislider accessibility
            start={10}
            step={10}
            onSlide={this.onChangeSlide.bind(this)}
            range={{
              min: 0,
              max: 100
            }} />
        )
    }
};