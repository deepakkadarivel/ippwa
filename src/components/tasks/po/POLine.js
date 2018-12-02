import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import Card from '@material-ui/core/Card/Card';
import './po.scss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { getIntString, getString } from '../../../shared/utils/string';

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
        id="categoryDesc"
        label="Category"
        value={getString(line.categoryDesc)}
        name="categoryDesc"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="subCategoryDesc"
        label="Sub Category"
        value={getString(line.subCategoryDesc)}
        name="subCategoryDesc"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
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
        id="price"
        label="Price"
        value={getIntString(line.price)}
        name="price"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
      />
      <TextField
        id="sgst"
        label="SGST %"
        value={getString(line.sgst)}
        name="sgst"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="cgst"
        label="CGST %"
        value={getString(line.cgst)}
        name="cgst"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="tax"
        label="Tax"
        value={getIntString(line.tax)}
        name="tax"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
      />
      <TextField
        id="netPrice"
        label="Net Price"
        value={getIntString(line.netPrice)}
        name="price"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
      />
      <TextField
        id="totalAmount"
        label="Total"
        value={getIntString(line.totalAmount)}
        name="totalAmount"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true,
          startAdornment: <InputAdornment position="start">₹</InputAdornment>
        }}
      />
      <TextField
        id="quantity"
        label="Qty"
        value={getIntString(line.quantity)}
        name="quantity"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
      />
    </div>
  );
};

const POLine = props => {
  return (
    <Card className="PO--Line">
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

POLine.propType = {
  line: PropTypes.object.isRequired,
  handleLineItemChange: PropTypes.func
};

export default POLine;
