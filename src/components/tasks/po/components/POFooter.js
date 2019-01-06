import React from 'react';
import PropTypes from 'prop-types';
import '../po.scss';
import TextField from '@material-ui/core/TextField';
import constants from "../../common/constants";

const POFooter = props => {
  const {handleChange, po} = props;
  return (
    <div className='Form--fields'>
      <TextField
        id={constants.ids.advancePayment}
        label={constants.labels.advancePayment}
        value={po.advancePayment}
        name={constants.names.advancePayment}
        className='Form--control'
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id={constants.ids.terms}
        label={constants.labels.terms}
        value={po.terms}
        name={constants.names.terms}
        className='Form--control'
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id={constants.ids.paymentTerms}
        label={constants.labels.paymentTerms}
        value={po.paymentTerms}
        name={constants.names.paymentTerms}
        className='Form--control'
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
      <TextField
        id={constants.ids.comments}
        label={constants.labels.comments}
        value={po.comments}
        name={constants.names.comments}
        className='Form--control'
        margin="normal"
        variant="outlined"
        onChange={handleChange}
      />
    </div>
  );
};

POFooter.propType = {
  handleChange: PropTypes.func.isRequired,
  po: PropTypes.object.isRequired,
};

export default POFooter;
