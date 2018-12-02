import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.scss';
import { getValue } from '../../shared/service/localStorage';
import constants from '../../shared/constants';
import history from '../../shared/service/history';
import styles from './styles';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {
    if (getValue(constants.LOCAL_STORAGE.COOKIE)) {
      history.push('/home');
    } else {
      history.push('/login');
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <CircularProgress className={classes.progress} color="secondary" />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
