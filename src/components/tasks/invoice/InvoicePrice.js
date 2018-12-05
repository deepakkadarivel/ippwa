import React from 'react';
import PropTypes from 'prop-types';
import './invoice.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getIntString } from '../../../shared/utils/string';

const InvoicePrice = props => {
  const { onChange, subTotalAmt, additionalAmt, adjustedAmt, discount, grandTotal } = props;
  return (
    <div className="Invoice--Price">
      <TextField
        id="subTotalAmt"
        label="Sub Total"
        value={getIntString(subTotalAmt)}
        name="subTotalAmt"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={(e) => onChange(e)}
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="additionalAmt"
        label="Shipping & Handling Charges"
        value={getIntString(additionalAmt)}
        name="additionalAmt"
        className="Form-Field col-2 col-"
        margin="normal"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="adjustedAmt"
        label="Adjust"
        value={getIntString(adjustedAmt)}
        name="adjustedAmt"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={(e) => onChange(e)}
        InputProps={{
          readOnly: false,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="discount"
        label="Discount"
        value={getIntString(discount)}
        name="discount"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={(e) => onChange(e)}
        InputProps={{
          readOnly: false,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="grandTotal"
        label="Grand Total"
        value={getIntString(grandTotal)}
        name="grandTotal"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={(e) => onChange(e)}
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
    </div>
  );
};

InvoicePrice.propType = {
  onChange: PropTypes.func.isRequired,
  subTotalAmt: PropTypes.number.isRequired,
  additionalAmt: PropTypes.number.isRequired,
  adjustedAmt: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  grandTotal: PropTypes.number.isRequired,
};

export default InvoicePrice;
