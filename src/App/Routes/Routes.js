import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';

const Routes = () => (
  <>
    <Route exact path="/" component={Home} />
  </>
);

export default Routes;
