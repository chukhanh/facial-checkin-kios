import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

const Identity: React.FunctionComponent = () => {
  const { path } = useRouteMatch();

  console.log('path:', path);

  return (
    <Switch>
      <Route exact path={`${path}/login`} component={Login} />
      <Route exact path={`${path}/register`} component={Register} />
      <Redirect to={`${path}/login`} />
    </Switch>
  );
};

export default Identity;
