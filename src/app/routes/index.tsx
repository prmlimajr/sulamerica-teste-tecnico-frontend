import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { CarDetail } from '../pages/CarDetail';

export default function Routes() {
 return (
    <Switch>
      <Route path="/" exact component={SignIn} />       
      <Route path="/home" component={Home} isPrivate />
      <Route path="/car/:id" component={CarDetail} isPrivate />
    </Switch>
  );
}
