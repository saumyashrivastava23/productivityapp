// src/popup/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Popup from './Popup';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/popup" component={Popup} />
      </Switch>
    </Router>
  );
}

export default Routes;