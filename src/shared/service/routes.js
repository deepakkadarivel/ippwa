import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {withTheme} from '@material-ui/core/styles';

import LoginContainer from '../../components/login/LoginContainer';
import App from '../../components/app/App';
import configureStore from '../store';
import Home from '../../components/home';
import history from './history';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#0891D0' },
    error: { 500: '#ff1744' },
  },
});

const Routes = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Switch basename={window.location.pathname || ''}>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/home" component={Home}/>
            <Route component={App}/>
          </Switch>
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
};

export default withTheme()(Routes);