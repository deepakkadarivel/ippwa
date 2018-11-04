import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';

const app = combineReducers({
  login: loginReducer
});

export default app;