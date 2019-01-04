import {connect} from 'react-redux';
import ExpenseComponent from "./ExpenseComponent";
import {fetchExpenseGrid} from './expenseActions';
import {
  selectExpenseGrid,
  expensePromise,
} from "./expenseSelector";

const mapStateToProps = state => {
  return {
    expenseGrid: selectExpenseGrid(state),
    expensePromise: expensePromise(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExpenseGrid: () => {
      dispatch(fetchExpenseGrid())
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseComponent);
