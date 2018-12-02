import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { getDateString, getString } from '../../../shared/utils/string';
import './form.scss';

const FormDate = props => (
  <TextField
    id={getString(props.x.id)}
    label={getString(props.x.label)}
    type="date"
    name={getString(props.x.name)}
    value={getDateString(props.x.value)}
    className={`Form-Field ${props.className}`}
    margin="normal"
    onChange={props.handleChange}
    InputLabelProps={{
      shrink: true,
      readOnly: props.x.readOnly
    }}
  />
);
FormDate.propTypes = {
  x: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default FormDate;
