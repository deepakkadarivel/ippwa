import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {getString} from "../../../shared/utils/string";
import './formStyles.scss';

const FormInputField = props => <TextField
    id={getString(props.x.id)}
    label={getString(props.x.label)}
    value={getString(props.x.value)}
    name={getString(props.x.name)}
    className={`Form-Field ${props.className}`}
    margin="normal"
    InputProps={{
      readOnly: props.x.readOnly,
    }}
  />;

FormInputField.propTypes = {
  x: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default FormInputField;