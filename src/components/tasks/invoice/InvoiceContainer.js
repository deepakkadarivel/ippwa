import {connect} from 'react-redux';
import InvoiceComponent from './InvoiceComponent';
import {selectInvoice, selectInvoicePromise} from './invoiceSelector';

import {
  getInvoice,
  updateFieldValue,
  updateLineFieldValue,
  updateInvoiceFieldValue,
  updateInvoice
} from './invoiceActions';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectInvoicePromise(state),
    errorMessage: state.invoice.errorMessage,
    invoice: selectInvoice(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInvoice(task) {
      dispatch(getInvoice(task));
    },
    updateFieldValue(item) {
      dispatch(updateFieldValue(item));
    },
    updateLineFieldValue(item) {
      dispatch(updateLineFieldValue(item));
    },
    updateInvoiceFieldValue(item) {
      dispatch(updateInvoiceFieldValue(item));
    },
    updateInvoice(invoice, comments, submitType, history) {
      dispatch(updateInvoice(invoice, comments, submitType, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceComponent);
