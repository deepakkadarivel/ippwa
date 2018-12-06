import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import Divider from '@material-ui/core/Divider/Divider';
import Footer from '../common/footer/Footer';
import InvoiceLine from "./InvoiceLine";
import InvoicePrice from "./InvoicePrice";
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

class InvoiceComponent extends Component {

  componentDidMount() {
    this.props.getInvoice(this.props.selectedTask);
  }

  render() {
    const {invoice, promise, updateFieldValue, updateInvoiceFieldValue, history, updateInvoice} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => event => {
      // updateLineFieldValue({ index: y, key: event.target.name, value: event.target.value });
    };

    const handleInvoiceUpdate = event => {
      updateInvoiceFieldValue({key: event.target.name, value: event.target.value});
    };

    return (
      <div className="Invoice container">
        {promise.isPending && (<CircularProgress className="progress"/>)}
        {promise.isFulfilled && (
          <div>
            <Header
              header={invoice.header}
              title={constants.TASK.INVOICE_TITLE}
              handleChange={handleChange}
            />
            {invoice.invoiceLineItems.map((x, y) => (
              <InvoiceLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
            ))}
            <Divider variant="inset"/>
            <InvoicePrice
              handleChange={handleInvoiceUpdate}
              invoice={invoice}
            />
            <Divider variant="inset"/>
            <Footer items={invoice.footer}/>
            <Divider variant="inset"/>
            <div className="Invoice--Actions">
              <Button size="medium" className="Actions-btn" onClick={() => history.goBack()}>
                Cancel
              </Button>
              <Button variant="outlined" size="medium" color="secondary" className="Actions-btn"
                      onClick={() => updateInvoice(invoice, '', 'approve', history)}>
                Complete Approval
              </Button>
              <Button variant="outlined" size="medium" color="error" className="Actions-btn"
                      onClick={() => updateInvoice(invoice, '', 'reject', history)}>
                Reject
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

InvoiceComponent.propTypes = {
  getInvoice: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  updateInvoiceFieldValue: PropTypes.func.isRequired,
  updateInvoice: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  invoice: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default InvoiceComponent;
