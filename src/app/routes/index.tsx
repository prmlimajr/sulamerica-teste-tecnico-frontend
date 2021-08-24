import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';



export default function Routes() {
  const routes = [
    {
      path: '/',
      component: Home,
      isExact: true,
      isPrivate: true,
    },
    // {
    //   path: '/car/:id',
    //   component: CarDetail,
    //   isExact: true,
    //   isPrivate: true,
    // },
    {
      path: '/signin',
      component: SignIn,
    }
  ];

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => {
          return route.isPrivate ? (
            <PrivateRoute
              exact={route.isExact}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route
              exact={route.isExact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
