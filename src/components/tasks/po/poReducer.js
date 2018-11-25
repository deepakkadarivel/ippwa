import poActionTypes from './poActionTypes';
import poInitialState from './poInitialState';
import setPromiseState from '../../../shared/service/promiseState';
import pickUpActionTypes from "../pickup/pickUpActionTypes";

const poReducer = (state = poInitialState, action) => {
  switch (action.type) {
    case poActionTypes.PO.fulfilled:
      return state.setIn(
        ['promise', 'po'],
        setPromiseState(false, true, false)
      );

    case poActionTypes.PO.pending:
      return state.setIn(
        ['promise', 'po'],
        setPromiseState(true, false, false)
      ).set('errorMessage', poInitialState.errorMessage);

    case poActionTypes.PO.rejected:
      return state.setIn(
        ['promise', 'po'],
        setPromiseState(false, false, true)
      );

    case poActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case poActionTypes.SET_PO:
      return state.set('po', action.po);

    case poActionTypes.UPDATE_PO_HEADER_FIELD_VALUE:
      const updatedHeader = action.po.header.map(x => {
        if (x.name === action.item.key) {
          return {...x, value: action.item.value};
        }
        return x;
      });
      return state.setIn(['po', 'header'], updatedHeader);

    case poActionTypes.UPDATE_PO_LINE_FIELD_VALUE:
      const updatedLines = action.po.poLineItems.map(x => {
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
      return state.setIn(['po', 'poLineItems', 'lines'], updatedLines);

    default:
      return state;
  }
};

export default poReducer;