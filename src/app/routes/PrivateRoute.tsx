import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../hooks/AuthContext';
import { isAuthenticated } from '../services/auth';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  isPrivate?: boolean;
}

export function PrivateRoute({ isPrivate, component: Component, ...rest }: RouteProps) {
  // const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: location } }}
          />
        )
      }
    />
  );
}
