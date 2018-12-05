import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import Line from '../common/line/Line';
import Divider from '@material-ui/core/Divider/Divider';
import Footer from '../common/footer/Footer';
import Actions from '../common/actions/Actions';
import POLine from "../po/POLine";
import PickUpLine from "./PickUpLine";

class PickUpComponent extends Component {
  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    const {pickUp, promise, updateFieldValue, updateLineFieldValue, history} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => event => {
      updateLineFieldValue({index: y, key: event.target.name, value: event.target.value});
    };

    return (
      <div className="PickUp container">
        {/* Header */}
        {promise.isFulfilled && (
          <Header
            header={pickUp.header}
            title={constants.TASK.PICK_UP_TITLE}
            handleChange={handleChange}
          />
        )}
        {promise.isFulfilled &&
        pickUp.pickUpLineItems.map((x, y) => (
          <PickUpLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
        ))}
        <Divider variant="inset"/>
        {promise.isFulfilled && <Footer items={pickUp.footer}/>}
        <Divider variant="inset"/>
        {promise.isFulfilled && <Actions history={history}/>}
      </div>
    );
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  pickUp: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default PickUpComponent;
