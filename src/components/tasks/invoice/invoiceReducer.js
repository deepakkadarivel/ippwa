import invoiceActionTypes from './invoiceActionTypes';
import invoiceInitialState from './invoiceInitialState';
import setPromiseState from '../../../shared/service/promiseState';

const invoiceReducer = (state = invoiceInitialState, action) => {
  switch (action.type) {
    case invoiceActionTypes.INVOICE.fulfilled:
      return state.setIn(
        ['promise', 'invoice'],
        setPromiseState(false, true, false)
      );

    case invoiceActionTypes.INVOICE.pending:
      return state.setIn(
        ['promise', 'invoice'],
        setPromiseState(true, false, false)
      ).set('errorMessage', invoiceInitialState.errorMessage);

    case invoiceActionTypes.INVOICE.rejected:
      return state.setIn(
        ['promise', 'invoice'],
        setPromiseState(false, false, true)
      );

    case invoiceActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case invoiceActionTypes.SET_INVOICE:
      return state.set('invoice', action.invoice);

    default:
      return state;
  }
};

export default invoiceReducer;