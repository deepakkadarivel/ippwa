import loginActionTypes from './loginActionTypes';
import loginInitialState from './loginInitialState';
import setPromiseState from '../../shared/service/promiseState';
import constants from '../../shared/constants';
import { setValue } from '../../shared/service/localStorage';

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case loginActionTypes.LOGIN.fulfilled:
      return state.setIn(['promise', 'login'], setPromiseState(false, true, false));

    case loginActionTypes.LOGIN.pending:
      return state
        .setIn(['promise', 'login'], setPromiseState(true, false, false))
        .set('errorMessage', loginInitialState.errorMessage);

    case loginActionTypes.LOGIN.rejected:
      return state.setIn(['promise', 'login'], setPromiseState(false, false, true));

    case loginActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case loginActionTypes.SET_AUTH:
      setValue(constants.LOCAL_STORAGE.COOKIE, action.auth.cookie || '');
      setValue(constants.LOCAL_STORAGE.LOADBALANCER, action.auth.loadBalancer || '');
      setValue(constants.LOCAL_STORAGE.USER_ID, action.auth.user.userId.toString());
      setValue(constants.LOCAL_STORAGE.FIRST_NAME, action.auth.user.firstName);
      setValue(constants.LOCAL_STORAGE.LAST_NAME, action.auth.user.lastName);
      setValue(
        constants.LOCAL_STORAGE.ORG_NAME,
        action.auth.user.orgUserMapping ? action.auth.user.orgUserMapping[0].name || '' : ''
      );
      setValue(
        constants.LOCAL_STORAGE.ORG_ID,
        action.auth.user.orgUserMapping
          ? action.auth.user.orgUserMapping[0].orgId.toString() || ''
          : ''
      );
      return state.set('auth', action.auth);

    default:
      return state;
  }
};

export default loginReducer;
