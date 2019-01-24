import React from 'react';
import Card from "../../../common/card/Card";
import TextField from "@material-ui/core/TextField/TextField";
import constants from "../../common/constants";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const POHeader = props => {
  const {po, handleChange} = props;
  return (
    <Card>
      <div className='POHeader Form'>
        <div className='Form--fields'>
          <TextField
            id={constants.ids.entityName}
            name={constants.names.entityName}
            label={constants.labels.Entity}
            value={po.entityName}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.viewName}
            name={constants.names.viewName}
            label={constants.labels.View}
            value={po.viewName}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.poFromLabel}
            name={constants.names.poFromLabel}
            label={constants.labels.Type}
            value={po.poFromLabel}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.requisitionNo}
            name={constants.names.requisitionNo}
            label={constants.labels.PORequestNo}
            value={po.requisitionNo}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.workflowName}
            name={constants.names.workflowName}
            label={constants.labels.Workflow}
            value={po.workflowName}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.supplierName}
            name={constants.names.supplierName}
            label={constants.labels.Supplier}
            value={po.supplierName}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.currencyCode}
            name={constants.names.currencyCode}
            label={constants.labels.Currency}
            value={po.currencyCode}
            className='Form--control'
            // onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id={constants.ids.billingAddressId}
            name={constants.ids.billingAddressId}
            select
            label={constants.labels.billingAddress}
            className='Form--control'
            value={po.billingAddressId}
            onChange={handleChange}
            helperText={constants.helperText.billingAddress}
            margin="normal"
            variant="outlined"
          >
            {po.billingAddress.map(entity =>
              <MenuItem
                key={entity.value}

                value={entity.value}>
                {entity.label}
              </MenuItem>
            )}
          </TextField>
          <TextField
            id={constants.ids.shippingAddressId}
            name={constants.ids.shippingAddressId}
            select
            label={constants.labels.shipToAddress}
            className='Form--control'
            value={po.shippingAddressId}
            onChange={handleChange}
            helperText={constants.helperText.shipToAddress}
            margin="normal"
            variant="outlined"
          >
            {po.shippingAddress.map(entity =>
              <MenuItem
                key={entity.value}

                value={entity.value}>
                {entity.label}
              </MenuItem>
            )}
          </TextField>
          {po.addressInput &&
          <FormControlLabel
            control={<Checkbox
              checked={po.addressInput}
              // onChange={this.handleChange('checkedA')}
              value="addressInput"
              className='Form--control'
            />}
            name={constants.names.addressInput}
            id={constants.ids.addressInput}
            label={constants.labels.addressInput}
            // labelPlacement="start"
          />}
          {po.addressInput && <TextField
            id={constants.ids.deliveryAddress}
            name={constants.names.deliveryAddress}
            label={constants.labels.deliveryAddress}
            value={po.deliveryAddress}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />}
          {po.addressInput && <TextField
            id={constants.ids.contactNo}
            name={constants.names.contactNo}
            label={constants.labels.contactNo}
            value={po.contactNo}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />}
          {po.addressInput && <TextField
            id={constants.ids.tinNo}
            name={constants.names.tinNo}
            label={constants.labels.tinNo}
            value={po.tinNo}
            helperText={constants.helperText.tinNo}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />}
          {po.addressInput && <TextField
            id={constants.ids.vatNo}
            name={constants.names.vatNo}
            label={constants.labels.vatNo}
            value={po.supplierName}
            className='Form--control'
            margin="normal"
            variant="outlined"
          />}
        </div>
      </div>
    </Card>
  );
};

export default POHeader;