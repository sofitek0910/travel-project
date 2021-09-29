import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "../router/public-router";


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getRoutes = routes => {
        return routes.map((prop, key) => {
          if (prop.layout === "/auth") {
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
        return (
            <div>
                <Switch>{this.getRoutes(routes)}</Switch>
            </div>
        )
    }
}

export default Admin;