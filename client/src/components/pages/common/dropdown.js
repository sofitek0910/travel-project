import React, { Component } from "react";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      placeholder: props.placeholder || "Please Select"
    };
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange = e => {
    // this.setState({selectValue: e.target.value});

    console.log("value", e.target.innerText);
    console.log("value", e.target.id);
  };
  
  render() {
    console.log("props",this.props);
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-secondary btn-dropdown dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          {this.state.placeholder}
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <span className="dropdown-item" id="1" onClick={this.handleChange}>
            Item 1
          </span>
          <span className="dropdown-item" id="2" onClick={this.handleChange}>Item 2</span>
          <span className="dropdown-item" id="3" onClick={this.handleChange}>Item 3</span>
        </div>
      </div>
    );
  }
}

// <select value="Radish" onChange={this.handleChange} >
//             <option value="Orange">Orange</option>
//             <option value="Radish">Radish</option>
//             <option value="Cherry">Cherry</option>
//         </select>
