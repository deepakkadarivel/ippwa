import tasksActionTypes from './tasksActionTypes';
import tasksInitialState from './tasksInitialState';
import setPromiseState from '../../../shared/service/promiseState';

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case tasksActionTypes.TASKS.fulfilled:
      return state.setIn(['promise', 'tasks'], setPromiseState(false, true, false));

    case tasksActionTypes.TASKS.pending:
      return state
        .setIn(['promise', 'tasks'], setPromiseState(true, false, false))
        .set('errorMessage', tasksInitialState.errorMessage);

    case tasksActionTypes.TASKS.rejected:
      return state.setIn(['promise', 'tasks'], setPromiseState(false, false, true));

    case tasksActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case tasksActionTypes.SET_TASKS:
      return state.set('tasks', action.tasks);

    case tasksActionTypes.SET_SELECTED_TASK:
      return state.set('selectedTask', action.task);

    default:
      return state;
  }
};

export default tasksReducer;
