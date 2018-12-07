import React from 'react';
import PropTypes from 'prop-types';
import '../invoice.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const InvoicePrice = props => {
  const { handleChange, invoice } = props;
  return (
    <div className="Invoice--Price">
      <TextField
        id="subTotalAmt"
        label="Sub Total"
        value={invoice.subTotalAmt}
        name="subTotalAmt"
        className="Form-Field col-2 col-"
        margin="normal"
        InputProps={{
          readOnly: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="additionalAmt"
        label="Shipping & Handling Charges"
        value={invoice.additionalAmt}
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
        value={invoice.adjustedAmt}
        name="adjustedAmt"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={handleChange}
        InputProps={{
          readOnly: false,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="discount"
        label="Discount"
        value={invoice.discount}
        name="discount"
        className="Form-Field col-2 col-"
        margin="normal"
        onChange={(e) => handleChange(e)}
        InputProps={{
          readOnly: false,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
        variant="outlined"
      />
      <TextField
        id="grandTotal"
        label="Grand Total"
        value={invoice.grandTotal}
        name="grandTotal"
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

InvoicePrice.propType = {
  handleChange: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired,
};

export default InvoicePrice;
