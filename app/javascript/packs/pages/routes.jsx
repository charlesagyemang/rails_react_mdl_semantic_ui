import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from './aboutMe';


const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about-me" component={AboutMe} />
  </Switch>
)

export default Main;
