import { connect } from 'react-redux';
import PickUpComponent from './PickUpComponent';

import { getPickUp, updateFieldValue, handleLineItemChange } from './pickUpActions';
import { selectPickUp, selectPickUpPromise } from './pickUpSelector';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectPickUpPromise(state),
    errorMessage: state.pickUp.errorMessage,
    pickUp: selectPickUp(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPickUp(task) {
      dispatch(getPickUp(task));
    },
    updateFieldValue(item) {
      dispatch(updateFieldValue(item));
    },
    updateLineFieldValue(item) {
      dispatch(handleLineItemChange(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickUpComponent);
