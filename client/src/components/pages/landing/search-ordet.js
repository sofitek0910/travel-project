import React from "react";
import DatePicker from "react-datepicker";
import Dropdown from '../common/dropdown';
import RangeSlider from "../common/range-slider";
// import NoSlider from "../common/no-ui-slider";

import sunUnbralla from "../../../assets/images/sun-umbrella.png";

export default class SearchOrdet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="search-box clearfix">
        <div className="container">
          <div className="search-outer">
            <div className="search-content">
              <form>
                <div className="row">
                  <div className="col-md-3 col-xs-6">
                    <div className="search-ad">
                      <p>
                        Find Your <span>Holiday</span>
                      </p>
                      <img className="flaticon-sun-umbrella" src={sunUnbralla} alt="EN" />
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="table_item">
                      <div className="form-group">
                        <Dropdown placeholder="Destination" />
                      </div>
                      <div className="form-group form-icon">
                        <Dropdown placeholder="Type" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="table_item">
                      <div className="form-group">
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-xs-6">
                    <div className="table_item table-item-slider">
                      <div className="form-group">
                        <RangeSlider />
                      </div>

                      <div className="form-group">
                        <div className="search">
                          <a href="/" className="search-button btn-blue btn-red">SEARCH</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
