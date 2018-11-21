import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const tasksInitialState = seamlessImmutable({
  promise: {
    tasks: setPromiseState()
  },
  errorMessage: '',
  tasks: [],
  selectedTask: {},
});

export default tasksInitialState;