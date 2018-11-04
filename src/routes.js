import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginComponent from './components/login/LoginComponent';
import App from './components/app/App';


export default function Routes() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL
  });

  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route component={() => <div>404 Not found 1</div>}/>
        <Route exact path="/" component={App}/>
        <Route path="/login" component={LoginComponent}/>
      </Switch>
    </BrowserRouter>
  );
}