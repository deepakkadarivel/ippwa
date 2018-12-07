import React from 'react';
import PropTypes from 'prop-types';
import '../asset.scss';
import TextField from '@material-ui/core/TextField';

const AssetFooter = props => {
  const {handleChange, asset} = props;
  return (
    <div className="Asset--Footer">
      <TextField
        id="comments"
        label="Comments"
        value={asset.comments}
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

AssetFooter.propType = {
  handleChange: PropTypes.func.isRequired,
  asset: PropTypes.object.isRequired,
};

export default AssetFooter;
