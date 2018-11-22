import {connect} from 'react-redux';
import InvoiceComponent from './InvoiceComponent';

import {
  getInvoice,
} from './invoiceActions';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: state.invoice.promise.invoice,
    errorMessage: state.invoice.errorMessage,
    invoice: state.invoice.invoice,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInvoice(task) {
      dispatch(getInvoice(task));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceComponent)