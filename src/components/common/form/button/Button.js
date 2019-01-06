import React from 'react';
import PropTypes from 'prop-types';
import {default as Btn} from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './button.scss';

const Button = props => {
  return (
    <div className='Button'>
      <Btn
        variant="contained"
        color="background"
        className={`${props.className}`}
        onClick={props.onClick}
        fullWidth={props.fullWidth}
        disabled={props.disabled}
        size="large"
      >
        {props.label}
      </Btn>
      {props.loading && <CircularProgress size={24} className='Button--buttonProgress' color="secondary"/>}
    </div>
  )
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  loading: false,
};

export default Button;