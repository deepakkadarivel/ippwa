import React, { Component } from 'react';
import PropTypes from "prop-types";

class PickUpComponent extends Component {
  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    return (
      <div>
        Pickup component
      </div>
    )
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default PickUpComponent;
