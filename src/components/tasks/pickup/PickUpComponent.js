import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import Line from "../common/line/Line";

class PickUpComponent extends Component {

  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    const {
      pickUp,
      promise,
      updateFieldValue,
      updateLineFieldValue,
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    const handleLineChange = prop => event => {
      updateLineFieldValue({header: prop.header, key: prop.field, value: event.target.value});
    };

    return (
      <div className='PickUp container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={pickUp.header} title={constants.TASK.PICK_UP_TITLE} handleChange={handleChange}/>}
        {promise.isFulfilled && pickUp.pickUpLineItems.map(x => <Line item={x} handleChange={handleLineChange}/>)}
      </div>
    )
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  pickUp: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default PickUpComponent;
