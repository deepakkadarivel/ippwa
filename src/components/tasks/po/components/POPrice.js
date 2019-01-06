import React from 'react';
import PropTypes from 'prop-types';
import '../po.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {getIntString} from '../../../../shared/utils/string';
import constants from "../../common/constants";

const Price = props => {
  const {lines} = props;
  return (
    <div className='Form--fields'>
      <TextField
        id={constants.ids.poTotalNetPrice}
        label={constants.labels.totalNetPrice}
        name={constants.names.poTotalNetPrice}
        className='Form--control'
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">{constants.labels.rupees}</InputAdornment>
        }}
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.netPrice;
          }, 0)
        )}
      />
      <TextField
        id={constants.ids.poTotalTax}
        label={constants.labels.totalTax}
        name={constants.names.poTotalTax}
        className='Form--control'
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">{constants.labels.rupees}</InputAdornment>
        }}
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.tax;
          }, 0)
        )}
      />
      <TextField
        id={constants.ids.poTotalTax}
        label={constants.labels.grandTotal}
        name={constants.names.poTotalTax}
        className='Form--control'
        margin="normal"
        variant="outlined"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">{constants.labels.rupees}</InputAdornment>
        }}
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.totalAmount;
          }, 0)
        )}
      />
    </div>
  );
};

Price.propType = {
  lines: PropTypes.array.isRequired
};

export default Price;
