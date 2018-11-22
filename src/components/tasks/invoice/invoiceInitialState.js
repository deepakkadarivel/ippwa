import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const invoiceInitialState = seamlessImmutable({
  promise: {
    invoice: setPromiseState()
  },
  errorMessage: '',
  invoice: {},
});

export default invoiceInitialState;