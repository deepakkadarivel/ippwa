import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getString} from "../../../shared/utils/string";
import './formStyles.scss';

const FormSelectField = props => <TextField
  id={getString(props.x.id)}
  select
  label={getString(props.x.label)}
  value={getString(props.x.value)}
  name={getString(props.x.name)}
  className={`Form-Field ${props.className}`}
  margin="normal"
  onChange={(e) => props.handleChange(e)}
  InputProps={{
    readOnly: props.x.readOnly,
  }}
>
  {props.x.options.map(option => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>;

FormSelectField.propTypes = {
  x: PropTypes.object.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FormSelectField;