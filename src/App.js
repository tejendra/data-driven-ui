import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import Apps from './screens/Apps';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/apps">
          <Apps />
        </Route>
      </Switch>
    </Router>
  );
}
