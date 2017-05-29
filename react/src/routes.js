import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import Layout from './components/Layout';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
  </Route>
);

export default routes;
