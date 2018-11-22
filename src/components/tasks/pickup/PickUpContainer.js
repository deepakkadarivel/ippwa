import {connect} from 'react-redux';
import PickUpComponent from './PickUpComponent';

import {
  getPickUp,
} from './pickUpActions';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: state.pickUp.promise.pickUp,
    errorMessage: state.pickUp.errorMessage,
    pickUp: state.pickUp.pickUp,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPickUp(task) {
      dispatch(getPickUp(task));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickUpComponent)