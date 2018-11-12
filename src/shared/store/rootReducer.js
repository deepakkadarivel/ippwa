import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';
import tasksReducer from '../../components/myTasks/tasksRducer';

const app = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
});

export default app;