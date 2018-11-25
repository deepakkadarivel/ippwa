import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";

class AssetComponent extends Component {
  componentDidMount() {
    this.props.getAsset(this.props.selectedTask);
  }

  render() {
    const {
      asset,
      promise,
      updateFieldValue,
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    return (
      <div className='Asset container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={asset.header} title={constants.PO.ASSET_TRACKING} handleChange={handleChange}/>}
      </div>
    )
  }
}

AssetComponent.propTypes = {
  getAsset: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default AssetComponent;
