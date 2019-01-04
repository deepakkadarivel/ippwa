import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';
import poReducer from '../../components/tasks/po/poReducer';
import tasksReducer from '../../components/tasks/myTasks/tasksRducer';
import pickUpReducer from '../../components/tasks/pickup/pickUpReducer';
import invoiceReducer from '../../components/tasks/invoice/invoiceReducer';
import assetReducer from '../../components/tasks/asset/assetReducer';
import homeReducer from "../../components/home/homeReducer";
import advanceReducer from "../../components/expense/advance/advanceReducer";
import expenseReducer from "../../components/expense/expenseReducer";

const app = combineReducers({
  home: homeReducer,
  login: loginReducer,
  tasks: tasksReducer,
  po: poReducer,
  pickUp: pickUpReducer,
  invoice: invoiceReducer,
  asset: assetReducer,
  advance: advanceReducer,
  expense: expenseReducer,
});

export default app;
