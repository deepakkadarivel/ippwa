import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';
import poReducer from '../../components/tasks/po/poReducer';
import tasksReducer from "../../components/tasks/myTasks/tasksRducer";

const app = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
  po: poReducer,
});

export default app;