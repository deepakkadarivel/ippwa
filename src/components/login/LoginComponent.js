import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import logo from '../../shared/images/ipact-logo.svg';
import './login.scss';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      showPassword: false,
      loading: false,
    }
  }

  render() {
    return <div className='Login'>
      <Paper
        className='Login-container'
      >
        <Grid
          container
          alignItems='center'
          direction='column'
          justify='center'
        >
          <img src={logo} className="App-logo" alt="logo"/>
          <TextField
            className='Login-container__input'
            id="outlined-adornment-username"
            variant="outlined"
            label="User Name"
            margin="normal"
            value={this.state.userName}
            onChange={e => this.setState({userName: e.target.value})}
          />
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            type={this.state.showPassword ? 'text' : 'password'}
            label="Password"
            margin="normal"
            value={this.state.password}
            onChange={e => {
              this.setState({password: e.target.value})
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={() => this.setState({showPassword: !this.state.showPassword})}
                  >
                    {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {!this.state.loading && <Button
            className='Login-container__button'
            variant="contained"
            size="large"
            color="primary"
            disabled={this.state.username === '' || this.state.password === ''}
            // onClick={() => this.props.login(this.state.userName, this.state.password)}>
            onClick={() => this.setState({loading: !this.state.loading})}>
            Login
          </Button>}

          <Fade
            in={this.state.loading}
            className='Login-container__spinner'
            style={{
              transitionDelay: this.state.loading ? '200ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress/>
          </Fade>
        </Grid>
      </Paper>
      <p className='Login-footer'>© iPact 2018. All rights reserved.</p>
    </div>;
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginComponent;