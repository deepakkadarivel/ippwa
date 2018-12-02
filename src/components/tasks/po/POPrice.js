import React from 'react';
import PropTypes from 'prop-types';
import './po.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getIntString, getString } from '../../../shared/utils/string';

const Price = props => {
  const { lines } = props;
  return (
    <div className="PO--Price">
      <TextField
        id="poTotalNetPrice"
        label="Total NetPrice"
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.netPrice;
          }, 0)
        )}
        name="poTotalNetPrice"
        className="Form-Field col-2 col-"
        margin="normal"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="poTotalTax"
        label="Total Tax"
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.tax;
          }, 0)
        )}
        name="poTotalTax"
        className="Form-Field col-2 col-"
        margin="normal"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="totalAmount"
        label="Grand Total"
        value={getIntString(
          lines.reduce((acc, line) => {
            return acc + line.totalAmount;
          }, 0)
        )}
        name="totalAmount"
        className="Form-Field col-2 col-"
        margin="normal"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
    </div>
  );
};

Price.propType = {
  lines: PropTypes.array.isRequired
};

export default Price;
