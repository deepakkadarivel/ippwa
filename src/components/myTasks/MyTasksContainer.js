import {connect} from 'react-redux';
import MyTasks from './index';
import { taskSelector } from './tasksSelector';

import {
  getTasks,
} from './tasksActions';

const mapStateToProps = state => {
  return {
    promise: state.tasks.promise.tasks,
    errorMessage: state.tasks.errorMessage,
    tasks: taskSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasks() {
      dispatch(getTasks());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTasks)