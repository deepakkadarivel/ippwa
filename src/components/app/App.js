import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.scss';
import LoginComponent from '../login/LoginComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline/>
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={LoginComponent}/>
          {/*<Route exact path="/about" component={About} />*/}
          {/*<Route exact path="/code" component={Code} />*/}
          {/*<Route exact path="/contact" component={Contact} />*/}
          {/*<Route exact path="/presence" component={info} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
