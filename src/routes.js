import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginComponent from './components/login/LoginComponent';
import App from './components/app/App';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch basename={window.location.pathname || ''}>
        <Route path="/login" component={LoginComponent}/>
        <Route component={App}/>
      </Switch>
    </BrowserRouter>
  );
}