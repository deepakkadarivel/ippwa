import poActionTypes from './poActionTypes';
import poInitialState from './poInitialState';
import setPromiseState from '../../../shared/service/promiseState';

const poReducer = (state = poInitialState, action) => {
  switch (action.type) {
    case poActionTypes.PO.fulfilled:
      return state.setIn(['promise', 'po'], setPromiseState(false, true, false));

    case poActionTypes.PO.pending:
      return state
        .setIn(['promise', 'po'], setPromiseState(true, false, false))
        .set('errorMessage', poInitialState.errorMessage);

    case poActionTypes.PO.rejected:
      return state.setIn(['promise', 'po'], setPromiseState(false, false, true));

    case poActionTypes.UPDATE_PO.fulfilled:
      return state.setIn(['promise', 'updatePO'], setPromiseState(false, true, false));

    case poActionTypes.UPDATE_PO.pending:
      return state
        .setIn(['promise', 'updatePO'], setPromiseState(true, false, false))
        .set('errorMessage', poInitialState.errorMessage);

    case poActionTypes.UPDATE_PO.rejected:
      return state.setIn(['promise', 'updatePO'], setPromiseState(false, false, true));

    case poActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case poActionTypes.SET_PO:
      return state.set('po', action.po);

    case poActionTypes.UPDATE_PO_HEADER_FIELD_VALUE:
      const updatedHeader = action.po.header.map(x => {
        if (x.name === action.item.key) {
          return { ...x, value: action.item.value };
        }
        return x;
      });
      return state.setIn(['po', 'header'], updatedHeader);

    case poActionTypes.UPDATE_PO_LINE_FIELD_VALUE:
      const poLineItems = action.po.poLineItems;
      const line = poLineItems[action.item.index];
      const qty = parseInt(action.item.value);
      const tax = parseFloat(((line.price * qty) / 100) * (line.sgst + line.cgst));
      const netPrice = parseFloat(line.price * qty);
      const totalAmount = parseFloat(netPrice + tax);
      const updatedLine = {
        ...line,
        [action.item.key]: qty || 0,
        tax: tax,
        netPrice: netPrice,
        totalAmount: totalAmount
      };
      const newLines = Object.assign([], poLineItems, {
        [action.item.index]: updatedLine
      });
      return state.setIn(['po', 'poLineItems'], newLines);

    default:
      return state;
  }
};

export default poReducer;
