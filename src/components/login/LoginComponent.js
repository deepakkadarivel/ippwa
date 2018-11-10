import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import logo from '../../shared/images/ipact-logo.svg';
import PropTypes from 'prop-types';
import styles from './styles';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      showPassword: false,
    }
  }

  render() {
    const {classes, promise, login} = this.props;
    return <main className={classes.main}>
      <CssBaseline/>
      <Paper className={classes.paper}>
        <CardMedia
          className={classes.logo}
          image={logo}
          title="logo"
        />
        <div className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="userName">User name</InputLabel>
            <Input
              id="userName"
              name="email"
              autoComplete="email"
              autoFocus
              value={this.state.userName}
              onChange={e => {
                this.setState({userName: e.target.value})
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type={this.state.showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={e => {
                this.setState({password: e.target.value})
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={() => this.setState({showPassword: !this.state.showPassword})}
                  >
                    {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {!promise.isPending && <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            disabled={this.state.username === '' || this.state.password === ''}
            className={classes.submit}
            onClick={() => login(this.state.userName, this.state.password)}
          >
            Login
          </Button>}
          <Fade
            in={promise.isPending}
            className={classes.spinner}
            style={{
              transitionDelay: promise.isPending ? '200ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress/>
          </Fade>
        </div>
      </Paper>
      <Typography component="p" className={classes.footer}>
        © iPact 2018. All rights reserved.
      </Typography>
    </main>;
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  promise: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginComponent);