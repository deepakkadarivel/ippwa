import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";

class InvoiceComponent extends Component {
  componentDidMount() {
    this.props.getInvoice(this.props.selectedTask);
  }

  render() {
    const {
      invoice,
      promise,
      updateFieldValue,
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    return (
      <div className='Invoice container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={invoice.header} title={constants.TASK.INVOICE_TITLE} handleChange={handleChange}/>}
      </div>
    )
  }
}

InvoiceComponent.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default InvoiceComponent;
