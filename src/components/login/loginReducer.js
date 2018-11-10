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

    case loginActionTypes.SET_AUTH:
      localStorage.setItem("cookie", action.auth.cookie || '');
      localStorage.setItem("loadBalancer", action.auth.loadBalancer || '');
      localStorage.setItem("UserId", action.auth.user.userId.toString());
      localStorage.setItem("orgId", action.auth.user.orgUserMapping ? action.auth.user.orgUserMapping[0].orgId.toString() || '' : '');
      return state.set('auth', action.auth);

    default:
      return state;
  }
};

export default loginReducer;