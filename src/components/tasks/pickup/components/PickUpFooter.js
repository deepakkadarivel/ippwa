import React from 'react';
import PropTypes from 'prop-types';
import '../pickUp.scss';
import TextField from '@material-ui/core/TextField';

const PickUpFooter = props => {
  const {handleChange, pickUp} = props;
  return (
    <div className="PickUp--Footer">
      <TextField
        id="comments"
        label="Comments"
        value={pickUp.comments}
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

PickUpFooter.propType = {
  handleChange: PropTypes.func.isRequired,
  pickUp: PropTypes.object.isRequired,
};

export default PickUpFooter;
