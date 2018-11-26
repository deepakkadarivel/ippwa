import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import Line from "../common/line/Line";

class InvoiceComponent extends Component {
  componentDidMount() {
    this.props.getInvoice(this.props.selectedTask);
  }

  render() {
    const {
      invoice,
      promise,
      updateFieldValue,
      updateLineFieldValue
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    const handleLineChange = prop => event => {
      updateLineFieldValue({header: prop.header, key: prop.field, value: event.target.value});
    };

    return (
      <div className='Invoice container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={invoice.header} title={constants.TASK.INVOICE_TITLE} handleChange={handleChange}/>}
        {promise.isFulfilled && invoice.invoiceLineItems.map(x => <Line item={x} handleChange={handleLineChange}/>)}
      </div>
    )
  }
}

InvoiceComponent.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default InvoiceComponent;
