import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h4><Link to="/">헤더</Link></h4>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
