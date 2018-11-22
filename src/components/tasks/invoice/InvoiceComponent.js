import React, { Component } from 'react';
import PropTypes from "prop-types";

class InvoiceComponent extends Component {
  componentDidMount() {
    this.props.getInvoice(this.props.selectedTask);
  }

  render() {
    return (
      <div>
        Invoice component
      </div>
    )
  }
}

InvoiceComponent.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default InvoiceComponent;
