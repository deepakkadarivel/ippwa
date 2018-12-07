import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';
import Card from '@material-ui/core/Card/Card';
import '../invoice.scss';
import TextField from '@material-ui/core/TextField';
import {getString} from '../../../../shared/utils/string';

const renderLine = props => {
  const {line, handleLineItemChange} = props;
  return (
    <div>
      <TextField
        id="sNo"
        label="S.NO"
        value={getString(line.sNo)}
        name="sNo"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="poNo"
        label="PO #"
        value={getString(line.poNo)}
        name="poNo"
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
        id="supplierName"
        label="Supplier"
        value={getString(line.supplierName)}
        name="supplierName"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="supplierPartNo"
        label="Supplier Part #"
        value={getString(line.supplierPartNo)}
        name="supplierPartNo"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="qtyOrdered"
        label="Qty Ordered"
        value={getString(line.qtyOrdered)}
        name="qtyOrdered"
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
        label="Qty Received"
        value={getString(line.qty)}
        name="qty"
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
        value={getString(line.price)}
        name="price"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="netPrice"
        label="Net Price"
        value={getString(line.netPrice)}
        name="netPrice"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="discount"
        label="Discount"
        value={getString(line.discount)}
        name="discount"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
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
        id="igst"
        label="IGST %"
        value={getString(line.igst)}
        name="igst"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="taxAmt"
        label="Tax"
        value={getString(line.taxAmt)}
        name="taxAmt"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
      <TextField
        id="totalAmt"
        label="Total"
        value={getString(line.totalAmt)}
        name="totalAmt"
        className="Form-Field Form-Field__line col-s-2 col-2 col-xs-3"
        onChange={handleLineItemChange}
        margin="normal"
        InputProps={{
          readOnly: true,
          disableUnderline: true
        }}
      />
    </div>
  );
};

const InvoiceLine = props => {
  return (
    <Card className="Invoice--Line">
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          Item
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.line.header}
        </Typography>
        <Divider variant="inset"/>
        {renderLine(props)}
      </CardContent>
    </Card>
  );
};

InvoiceLine.propType = {
  line: PropTypes.object.isRequired,
  handleLineItemChange: PropTypes.func.isRequired
};

export default InvoiceLine;
