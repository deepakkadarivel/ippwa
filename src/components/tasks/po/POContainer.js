import { connect } from 'react-redux';
import POComponent from './POComponent';

import { getPO, updateFieldValue, handleLineItemChange, updatePO } from './poActions';

import { selectPO, selectPOPromise } from './poSelector';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectPOPromise(state),
    errorMessage: state.po.errorMessage,
    po: selectPO(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPO(task) {
      dispatch(getPO(task));
    },
    updateFieldValue(item) {
      dispatch(updateFieldValue(item));
    },
    updateLineFieldValue(item) {
      dispatch(handleLineItemChange(item));
    },
    updatePO(po, comments, totalAmount, submitType, history) {
      dispatch(updatePO(po, comments, totalAmount, submitType, history));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(POComponent);
