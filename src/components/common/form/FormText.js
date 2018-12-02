import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getExactString, getString } from '../../../shared/utils/string';
import './form.scss';

const FormText = props => (
  <TextField
    id={getString(props.x.id)}
    label={getString(props.x.label)}
    value={props.x.readOnly ? getString(props.x.value) : getExactString(props.x.value)}
    name={getString(props.x.name)}
    className={`Form-Field ${props.className}`}
    onChange={props.handleChange}
    margin="normal"
    InputProps={{
      readOnly: props.x.readOnly,
      disableUnderline: props.x.readOnly,
      startAdornment: props.x.adornment && <InputAdornment position="start">₹</InputAdornment>
    }}
  />
);

FormText.propTypes = {
  x: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default FormText;
