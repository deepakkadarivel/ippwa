import React, {Component} from "react";
import PropTypes from 'prop-types';
import './po.scss';
import Header from "../common/header/Header";
import constants from "../../../shared/constants";
import Line from "../common/line/Line";
import Price from "../common/price/Price";

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const {
      po,
      promise,
      updateFieldValue,
      updateLineFieldValue,
    } = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineChange = y => event => {
      updateLineFieldValue({index: y, key: event.target.name, value: event.target.value});
    };

    return (
      <div className='PO container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={po.header} title={constants.TASK.PO_AMENDMENT_TITLE} handleChange={handleChange}/>}
        {promise.isFulfilled && po.poLineItems.map((x, y) => <Line key={y} item={x} handleChange={handleLineChange(y)}/>)}
        {promise.isFulfilled && <Price items={po.prices}/>}
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
