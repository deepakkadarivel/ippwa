import {connect} from 'react-redux';
import POComponent from './POComponent';

import {
  getPO,
} from './poActions';

import {
  selectPO,
  selectPOPromise,
} from './poSelector';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectPOPromise(state),
    errorMessage: state.po.errorMessage,
    po: selectPO(state),
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