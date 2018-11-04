import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import LoginComponent from '../login/LoginComponent';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline/>
        <Switch basename={window.location.pathname || ''}>
          <Route exact path='/login' component={LoginComponent}/>
          {/*<Route exact path="/about" component={About} />*/}
          {/*<Route exact path="/code" component={Code} />*/}
          {/*<Route exact path="/contact" component={Contact} />*/}
          {/*<Route exact path="/presence" component={info} />*/}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
