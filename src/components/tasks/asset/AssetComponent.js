import React, { Component } from 'react';
import PropTypes from "prop-types";

class AssetComponent extends Component {
  componentDidMount() {
    this.props.getAsset(this.props.selectedTask);
  }

  render() {
    return (
      <div>
        Asset component
      </div>
    )
  }
}

AssetComponent.propTypes = {
  getAsset: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default AssetComponent;
