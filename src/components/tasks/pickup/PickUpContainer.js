import {connect} from 'react-redux';
import PickUpComponent from './PickUpComponent';

import {
  getPickUp,
} from './pickUpActions';
import {selectPickUp, selectPickUpPromise} from "./pickUpSelector";

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectPickUpPromise(state),
    errorMessage: state.pickUp.errorMessage,
    pickUp: selectPickUp(state),
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