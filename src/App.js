import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import BlogIndex from './components/BlogIndex';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={BlogIndex} />
    </Switch>
  </Fragment>
)

export default App;