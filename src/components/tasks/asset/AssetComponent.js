import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import Line from "../common/line/Line";

class AssetComponent extends Component {
  componentDidMount() {
    this.props.getAsset(this.props.selectedTask);
  }

  render() {
    const {
      asset,
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
      <div className='Asset container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={asset.header} title={constants.TASK.ASSET_TITLE} handleChange={handleChange}/>}
        {promise.isFulfilled && asset.assetLineItems.map(x => <Line item={x} handleChange={handleLineChange}/>)}
      </div>
    )
  }
}

AssetComponent.propTypes = {
  getAsset: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default AssetComponent;
