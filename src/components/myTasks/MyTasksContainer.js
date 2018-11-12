import {connect} from 'react-redux';
import MyTasks from './index';
import {
  getTasks,
} from './tasksActions';

const mapStateToProps = state => {
  return {
    promise: state.tasks.promise.tasks,
    errorMessage: state.tasks.errorMessage,
    tasks: state.tasks.tasks,
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