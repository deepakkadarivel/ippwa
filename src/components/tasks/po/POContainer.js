import {connect} from 'react-redux';
import POComponent from './POComponent';

import {
  getPO,
} from './poActions';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: state.po.promise.po,
    errorMessage: state.po.errorMessage,
    po: state.po.po,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPO(task) {
      dispatch(getPO(task));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(POComponent)