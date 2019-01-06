import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import { withTheme } from '@material-ui/core/styles';

import LoginContainer from '../../components/login/LoginContainer';
import App from '../../components/app/App';
import configureStore from '../store';
import history from './history';
import HomeContainer from "../../components/home/HomeContainer";

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    background: {
      paper: '#fff',
      default: '#F4F5FA'
    },
    primary: {
      light: '#5fc1ff',
      main: '#0891D0',
      dark: '#00649f',
      contrastText: 'rgba(0, 0, 0, 1)'
    },
    secondary: {
      light: '#ff6e53',
      main: '#E23828',
      dark: '#a80000',
      contrastText: '#fff'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
});
const Routes = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Switch basename={window.location.pathname || ''}>
            <Route path="/login" component={LoginContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route component={App} />
          </Switch>
        </MuiThemeProvider>
      </Provider>
    </Router>
  );
};

export default withTheme()(Routes);
