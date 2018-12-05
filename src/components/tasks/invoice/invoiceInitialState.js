import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const invoiceInitialState = seamlessImmutable({
  promise: {
    invoice: setPromiseState(),
    updateInvoice: setPromiseState()
  },
  errorMessage: '',
  invoice: {},
  invoiceApprovalResponse: {},
});

export default invoiceInitialState;
