import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import {getValue} from '../../shared/service/localStorage';
import constants from '../../shared/constants';
import history from '../../shared/service/history';

class App extends Component {

  componentDidMount() {
    if (getValue(constants.LOCAL_STORAGE.COOKIE)) {
      history.push('/home');
    } else {
      history.push('/login');
    }
  }

  render() {
    return (
      <div className="App">
        <CircularProgress className='App-progress' color="secondary" />
      </div>
    );
  }
}

export default App;
