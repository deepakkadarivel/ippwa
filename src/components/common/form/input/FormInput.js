import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import './input.scss';

const FormInput = (props) => {
  return (
    <TextField
      id={props.name}
      name={props.name}
      label={props.label}
      placeholder={props.placeholder}
      type={props.type}
      className={`Input ${props.className}`}
      margin="normal"
      variant="outlined"
      disabled={props.disabled}
      InputProps={props.InputProps}
      onChange={props.onChange}
    />
  )
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  InputProps: PropTypes.any,
};

FormInput.defaultProps = {
  disabled: false,
  placeholder: '',
  InputPops: {},
  type: 'text',
};

export default FormInput;