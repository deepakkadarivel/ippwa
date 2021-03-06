import pickUpActionTypes from './pickUpActionTypes';
import pickUpInitialState from './pickUpInitialState';
import setPromiseState from '../../../shared/service/promiseState';
import poActionTypes from '../po/poActionTypes';

const pickUpReducer = (state = pickUpInitialState, action) => {
  switch (action.type) {
    case pickUpActionTypes.PICK_UP.fulfilled:
      return state.setIn(['promise', 'pickUp'], setPromiseState(false, true, false));

    case pickUpActionTypes.PICK_UP.pending:
      return state
        .setIn(['promise', 'pickUp'], setPromiseState(true, false, false))
        .set('errorMessage', pickUpInitialState.errorMessage);

    case pickUpActionTypes.PICK_UP.rejected:
      return state.setIn(['promise', 'pickUp'], setPromiseState(false, false, true));

    case pickUpActionTypes.UPDATE_PICK_UP.fulfilled:
      return state.setIn(['promise', 'updatePickUp'], setPromiseState(false, true, false));

    case pickUpActionTypes.UPDATE_PICK_UP.pending:
      return state
        .setIn(['promise', 'updatePickUp'], setPromiseState(true, false, false))
        .set('errorMessage', pickUpInitialState.errorMessage);

    case pickUpActionTypes.UPDATE_PICK_UP.rejected:
      return state.setIn(['promise', 'updatePickUp'], setPromiseState(false, false, true));

    case pickUpActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case pickUpActionTypes.SET_PICK_UP:
      return state.set('pickUp', action.pickUp);

    case pickUpActionTypes.UPDATE_PICK_UP_HEADER_FIELD_VALUE:
      const updatedHeader = action.pickUp.header.map(x => {
        if (x.name === action.item.key) {
          return { ...x, value: action.item.value };
        }
        return x;
      });
      return state.setIn(['pickUp', 'header'], updatedHeader);

    case pickUpActionTypes.UPDATE_PICK_UP_LINE_FIELD_VALUE:
      const pickUpLineItems = action.pickUp.pickUpLineItems;
      const line = pickUpLineItems[action.item.index];
      const updatedLine = {
        ...line,
        [action.item.key]: parseInt(action.item.value) || 0,
      };

      const newLines = Object.assign([], pickUpLineItems, {
        [action.item.index]: updatedLine
      });
      return state.setIn(['pickUp', 'pickUpLineItems'], newLines);

    case pickUpActionTypes.SET_PICK_UP_APPROVAL_RESPONSE:
      return state.set('pickUpApprovalResponse', action.pickUp);

    case pickUpActionTypes.UPDATE_PICK_UP_FIELD_VALUE:
      return state.set('pickUp', action.pickUp);

    default:
      return state;
  }
};

export default pickUpReducer;
