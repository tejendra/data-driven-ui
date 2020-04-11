import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { DynamicComponentList } from '../utils';
import { getMyApps } from '../services/myApps';
import TheApp from './TheApp';

const Apps = () => {
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    getMyApps().then((res) => setMyApps(res));
  });

  let { path } = useRouteMatch();

  return (
    <Switch>
      {myApps.map((app, index) => {
        return (
          <Route path={`${path}${app.location}`} key={index}>
            <TheApp api={app.api} />
          </Route>
        );
      })}
      <Route exact path="/apps">
        <DynamicComponentList list={myApps} />;
      </Route>
    </Switch>
  );
};

export default Apps;
