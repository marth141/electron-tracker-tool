/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/tracker-mod/DesignTracker';
import CounterPage from './containers/CounterPage';

// Use exact path on root HomePage so
// that order can be ignored.
// Boilerplate will start at root '/' path.
export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/counter" component={CounterPage} />
    </Switch>
  </App>
);
