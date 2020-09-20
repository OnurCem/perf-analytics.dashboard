import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from 'common/store';
import DashboardContainer from 'modules/dashboard/DashboardContainer';

import 'app.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <DashboardContainer />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
