import React, {Component} from "react";
import PropTypes from 'prop-types';
import './po.scss';
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import Line from "../common/line/Line";

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const {
      po,
      promise,
      updateFieldValue,
    } = this.props;

    const handleChange = prop => event => {
      updateFieldValue({key: prop, value: event.target.value});
    };

    const handleLineChange = prop => event => {
      updateFieldValue({header: prop.header, key: prop.field, value: event.target.value});
    };

    return (
      <div className='PO container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={po.header} title={constants.TASK.PO_AMENDMENT_TITLE} handleChange={handleChange}/>}
        {promise.isFulfilled && po.poLineItems.map(x => <Line item={x} handleChange={handleLineChange}/>)}
      </div>
    )
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  po: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default POComponent;
