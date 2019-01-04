import seamlessImmutable from 'seamless-immutable';
import setPromiseState from "../../shared/service/promiseState";

const expenseInitialState = seamlessImmutable({
  promise: {
    expense: setPromiseState()
  },
  expenseGrid: {},
});

export default expenseInitialState;
