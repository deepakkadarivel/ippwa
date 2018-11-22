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

    default:
      return state;
  }
};

export default pickUpReducer;