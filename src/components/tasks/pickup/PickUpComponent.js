import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import {updateFieldValue} from "./pickUpActions";

class PickUpComponent extends Component {

  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    const {
      pickUp,
      promise,
      updateFieldValue,
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    return (
      <div className='PickUp container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={pickUp.header} title={constants.TASK.PICK_UP_TITLE} handleChange={handleChange}/>}
      </div>
    )
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  pickUp: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default PickUpComponent;
