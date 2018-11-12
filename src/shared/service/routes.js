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
  "palette": {
    "common": {
      "black": "#000",
      "white": "#fff"
    },
    "background": {
      "paper": "#fff",
      "default": "#fafafa"
    },
    "primary": {
      "light": "rgba(66, 177, 225, 1)",
      "main": "rgba(8, 145, 208, 1)",
      "dark": "rgba(3, 128, 185, 1)",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "rgba(51, 46, 46, 0.7)",
      "main": "rgba(51, 46, 46, 1)",
      "dark": "rgba(15, 15, 15, 1)",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
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