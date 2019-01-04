import {get} from 'lodash';

const selectExpenseGrid = state => get(state, 'expense.expenseGrid');
const expensePromise = state => get(state, 'expense.promise.expense');

export {
  selectExpenseGrid,
  expensePromise,
};