import { combineReducers } from 'redux';
import loginReducer from '../../components/login/loginReducer';
import poReducer from '../../components/tasks/po/poReducer';
import tasksReducer from '../../components/tasks/myTasks/tasksRducer';
import pickUpReducer from '../../components/tasks/pickup/pickUpReducer';
import invoiceReducer from '../../components/tasks/invoice/invoiceReducer';
import assetReducer from '../../components/tasks/asset/assetReducer';
import homeReducer from "../../components/home/homeReducer";

const app = combineReducers({
  home: homeReducer,
  login: loginReducer,
  tasks: tasksReducer,
  po: poReducer,
  pickUp: pickUpReducer,
  invoice: invoiceReducer,
  asset: assetReducer,
});

export default app;
