import loginActionTypes from './loginActionTypes';
import loginInitialState from './loginInitialState';
import setPromiseState from '../../shared/service/promiseState';

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN.fulfilled:
      return state.setIn(
        ['promise', 'login'],
        setPromiseState(false, true, false)
      );

    case loginActionTypes.LOGIN.pending:
      return state.setIn(
        ['promise', 'login'],
        setPromiseState(true, false, false)
      ).set('errorMessage', loginInitialState.errorMessage);

    case loginActionTypes.LOGIN.rejected:
      return state.setIn(
        ['promise', 'login'],
        setPromiseState(false, false, true)
      );

    case loginActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    default:
      return state;
  }
};

export default loginReducer;