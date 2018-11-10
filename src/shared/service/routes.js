import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import {withTheme} from '@material-ui/core/styles';

import LoginContainer from '../../components/login/LoginContainer';
import App from '../../components/app/App';
import configureStore from '../store';

const store = configureStore();

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#0891D0' },
    error: { 500: '#ff1744' },
  },
});

const Routes = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Switch basename={window.location.pathname || ''}>
            <Route path="/login" component={LoginContainer}/>
            <Route component={App}/>
          </Switch>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default withTheme()(Routes);