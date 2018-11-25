import pickUpActionTypes from './pickUpActionTypes';
import pickUpInitialState from './pickUpInitialState';
import setPromiseState from '../../../shared/service/promiseState';

const pickUpReducer = (state = pickUpInitialState, action) => {
  switch (action.type) {
    case pickUpActionTypes.PICK_UP.fulfilled:
      return state.setIn(
        ['promise', 'pickUp'],
        setPromiseState(false, true, false)
      );

    case pickUpActionTypes.PICK_UP.pending:
      return state.setIn(
        ['promise', 'pickUp'],
        setPromiseState(true, false, false)
      ).set('errorMessage', pickUpInitialState.errorMessage);

    case pickUpActionTypes.PICK_UP.rejected:
      return state.setIn(
        ['promise', 'pickUp'],
        setPromiseState(false, false, true)
      );

    case pickUpActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case pickUpActionTypes.SET_PICK_UP:
      return state.set('pickUp', action.pickUp);

    case pickUpActionTypes.UPDATE_PICK_UP_HEADER_FIELD_VALUE:
        const updatedHeader = action.pickUp.header.map(x => {
          if (x.name === action.item.key) {
            return {...x, value: action.item.value};
          }
          return x;
        });
      return state.setIn(['pickUp', 'header'], updatedHeader);

    default:
      return state;
  }
};

export default pickUpReducer;