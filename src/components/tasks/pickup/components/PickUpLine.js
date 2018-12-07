import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import Card from '@material-ui/core/Card/Card';
import '../pickUp.scss';
import TextField from '@material-ui/core/TextField';
import {getIntString, getString} from '../../../../shared/utils/string';

const renderLine = props => {
  const { line, handleLineItemChange } = props;
  return (
    <div>
      <TextField
        id="lineItemId"
        label="Line Item"
        value={getString(line.lineItemId)}
        name="lineItemId"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="itemNo"
        label="Item #"
        value={getString(line.itemNo)}
        name="itemNo"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="uom"
        label="UOM"
        value={getString(line.uom)}
        name="uom"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="qty"
        label="Qty"
        value={getIntString(line.qty)}
        name="qty"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
      />
    </div>
  );
};

const PickUpLine = props => {
  return (
    <Card className="PickUp--Line">
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Item
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.line.header}
        </Typography>
        <Divider variant="inset" />
        {renderLine(props)}
      </CardContent>
    </Card>
  );
};

PickUpLine.propType = {
  line: PropTypes.object.isRequired,
  handleLineItemChange: PropTypes.func
};

export default PickUpLine;
