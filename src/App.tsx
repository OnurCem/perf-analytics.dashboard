import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from 'modules/dashboard/Dashboard';

import 'app.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
