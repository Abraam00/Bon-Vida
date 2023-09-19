import React from 'react';
import { Route, Switch } from 'react-router-dom';
import frontpage from './Frontpage';
import About from './aboutus';

function Routes() {
  return (
    <Switch>
      <Route path="/aboutus" component={About} />
      <Route path="/" component={frontpage} />
    </Switch>
  );
}

export default Routes;