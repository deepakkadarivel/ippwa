import React from 'react';
import PropTypes from 'prop-types';
import '../invoice.scss';
import TextField from '@material-ui/core/TextField';

const InvoiceFooter = props => {
  const {handleChange, invoice} = props;
  return (
    <div className="Invoice--Footer">
      <TextField
        id="paymentTerms"
        label="Payment Terms"
        value={invoice.paymentTerms}
        name="paymentTerms"
        className="Form-Field col-2 col-"
        margin="normal"
        rowsMax={5}
        onChange={handleChange}
        InputProps={{
          readOnly: false,
        }}
        variant="outlined"
      />
      <TextField
        id="comments"
        label="Comments"
        value={invoice.comments}
        name="comments"
        className="Form-Field col-2 col-"
        margin="normal"
        rowsMax={5}
        onChange={handleChange}
        InputProps={{
          readOnly: false,
        }}
        variant="outlined"
      />
    </div>
  );
};

InvoiceFooter.propType = {
  handleChange: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired,
};

export default InvoiceFooter;
