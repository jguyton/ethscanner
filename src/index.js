import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'; //v4
//history considerations
import history from './history'; //v4
//import App component (acess to the rest of the application)
import App from './App'
import Home from './layouts/views/Home/Home'
import Dashboard from './layouts/views/Dashboard/Dashboard'
import BlockInfo from './layouts/views/BlockInfo/BlockInfo'
import NotFound from './layouts/views/NotFound/NotFound'

import './index.css'

ReactDOM.render((
    <App>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/address/:address" component={Dashboard} />
          <Route exact path="/block/:block" component={BlockInfo} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </App>
  ),
  document.getElementById('root')
);
