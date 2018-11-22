import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';
import poReducer from '../../components/tasks/po/poReducer';
import tasksReducer from "../../components/tasks/myTasks/tasksRducer";
import pickUpReducer from "../../components/tasks/pickup/pickUpReducer";

const app = combineReducers({
  login: loginReducer,
  tasks: tasksReducer,
  po: poReducer,
  pickUp: pickUpReducer,
});

export default app;