import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment/InputAdornment';
import IconButton from '@material-ui/core/IconButton/IconButton';
import logo from '../../shared/images/ipact-logo-light.svg';
import PropTypes from 'prop-types';
import FormInput from "../common/form/input/FormInput";
import Button from "../common/form/button/Button";
import './login.scss';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      showPassword: false
    };
  }

  render() {
    const {promise, login, errorMessage} = this.props;

    const handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    };

    return (
      <div className='Login'>
        <div className="Login__modal">
          <img src={logo} alt="logo" className='Login--logo'/>
          <FormInput name='userName' label='User Name' placeholder='user name' value={this.state.userName}
                     onChange={handleChange}/>
          <FormInput
            name='password'
            label='Password'
            placeholder='password' value={this.state.password}
            type={this.state.showPassword ? 'text' : 'password'}
            onChange={handleChange}
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
            }}/>
          <Button
            label={'Login'}
            fullWidth={true}
            disabled={
              this.state.username === '' || this.state.password === '' || promise.isPending
            }
            loading={promise.isPending}
            onClick={() => login(this.state.userName, this.state.password)}
          />
          {errorMessage && <p className='Login--footer'>{errorMessage}</p>}
        </div>

        <Typography variant="caption" className='Login--footer'>
          © iPact 2018. All rights reserved.
        </Typography>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  login: PropTypes.func.isRequired,
  promise: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default LoginComponent;
