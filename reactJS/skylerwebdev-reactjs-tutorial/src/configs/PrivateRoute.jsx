import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>

      localStorage.getItem("token") ?

      (
        <Component {...props} />
      )
      :
      (
          alert('No Token Found')
        // <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;