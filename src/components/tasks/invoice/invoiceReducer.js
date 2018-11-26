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

    case invoiceActionTypes.UPDATE_INVOICE_HEADER_FIELD_VALUE:
      const updatedHeader = action.invoice.header.map(x => {
        if (x.name === action.item.key) {
          return {...x, value: action.item.value};
        }
        return x;
      });
      return state.setIn(['invoice', 'header'], updatedHeader);

    case invoiceActionTypes.UPDATE_INVOICE_LINE_FIELD_VALUE:
      const updatedLines = action.invoice.invoiceLineItems.map(x => {
        if (x.header.label === action.item.header) {
          x.map(y => {
            if (y.header === action.item.key) {
              return {...y, value: action.item.value};
            }
            return y;
          })
        }
        return x;
      });
      return state.setIn(['invoice', 'invoiceLineItems', 'lines'], updatedLines);

    default:
      return state;
  }
};

export default invoiceReducer;