import React, {Component} from "react";
import PropTypes from 'prop-types';
import './po.scss';
import Header from "../common/header/Header";
import constants from "../../../shared/constants";

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

    return (
      <div className='PO container'>
        {/* Header */}
        {promise.isFulfilled && <Header header={po.header} title={constants.PO.PO_TITLE} handleChange={handleChange}/>}
      </div>
    )
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  po: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default POComponent;
