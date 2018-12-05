import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import Divider from '@material-ui/core/Divider/Divider';
import Footer from '../common/footer/Footer';
import Actions from '../common/actions/Actions';
import InvoiceLine from "./InvoiceLine";
import InvoicePrice from "./InvoicePrice";

class InvoiceComponent extends Component {

  componentDidMount() {
    this.props.getInvoice(this.props.selectedTask);
  }

  render() {
    const {invoice, promise, updateFieldValue, updateInvoiceFieldValue, history} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => event => {
      // updateLineFieldValue({ index: y, key: event.target.name, value: event.target.value });
    };

    const updateInvoice = event => {
      updateInvoiceFieldValue({key: event.target.name, value: event.target.value});
    };

    return (
      <div className="Invoice container">
        {/* Header */}
        {promise.isFulfilled && (
          <Header
            header={invoice.header}
            title={constants.TASK.INVOICE_TITLE}
            handleChange={handleChange}
          />
        )}
        {promise.isFulfilled &&
        invoice.invoiceLineItems.map((x, y) => (
          <InvoiceLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
        ))}
        <Divider variant="inset"/>
        {promise.isFulfilled && <InvoicePrice
          handleChange={updateInvoice}
          invoice={invoice}
        />}
        <Divider variant="inset"/>
        {promise.isFulfilled && <Footer items={invoice.footer}/>}
        <Divider variant="inset"/>
        {promise.isFulfilled && <Actions history={history}/>}
      </div>
    );
  }
}

InvoiceComponent.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  updateInvoiceFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default InvoiceComponent;
