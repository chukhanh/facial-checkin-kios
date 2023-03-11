import React, { ReactElement } from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

import IdRegisteration from './IdRegister';
import FaceRegister from './FaceRegister';
import RegisterSuccess from './RegisterSuccess';

const Register = (): ReactElement => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/id`} component={IdRegisteration} />
      <Route exact path={`${path}/facescan`} component={FaceRegister} />
      <Route exact path={`${path}/success`} component={RegisterSuccess} />
      <Redirect to={`${path}/id`} />
    </Switch>
  );
};

export default Register;
