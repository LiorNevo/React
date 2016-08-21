import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';
import TripSection from './jivry/pages/TripSection';
import TestComponent from './components/TestComponent';
import VerticalTabsPage from './components/VerticalTabsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="tripSection" component={TripSection}/>
    <Route path="testComponent" component={TestComponent}/>
    <Route path="verticalTabsPage" component={VerticalTabsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
