import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "../router/private-router";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import "../assets/css/style.css";
import "../assets/css/dashboard.css";

import Siddebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/admin") {
            // return (
            //   <Route
            //     path={prop.layout + prop.path}
            //     render={props => (
            //       <prop.component
            //         {...props}
            //         handleClick={this.handleNotificationClick}
            //       />
            //     )}
            //     key={key}
            //   />
            // );
            return(<Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />)
          } else {
            return null;
          }
        });
    };

    render() {
      if (this.props.isAuthenticated && this.props.user.type !== "admin") {
        return <Redirect to="/" />
      };
      return (
          <div id="dashboard">
              <AdminNavbar></AdminNavbar>
              <Siddebar></Siddebar>
              <Switch>{this.getRoutes(routes)}</Switch>
          </div>
      )
    }
}

Admin.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return { 
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated 
  };
};

export default connect(mapStateToProps, {})(Admin);