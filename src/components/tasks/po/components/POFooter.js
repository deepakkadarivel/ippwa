import React from 'react';
import PropTypes from 'prop-types';
import '../po.scss';
import TextField from '@material-ui/core/TextField';

const POFooter = props => {
  const {handleChange, po} = props;
  return (
    <div className="PO--Footer">
      <TextField
        id="advancePayment"
        label="Advance Payment %"
        value={po.advancePayment}
        name="advancePayment"
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
        id="terms"
        label="Terms"
        value={po.terms}
        name="terms"
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
        id="paymentTerms"
        label="Payment Terms"
        value={po.paymentTerms}
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
        value={po.comments}
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

POFooter.propType = {
  handleChange: PropTypes.func.isRequired,
  po: PropTypes.object.isRequired,
};

export default POFooter;
