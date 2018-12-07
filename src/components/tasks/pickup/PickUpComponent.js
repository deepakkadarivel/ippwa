import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider/Divider';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import PickUpLine from './components/PickUpLine';
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import PickUpFooter from "./components/PickUpFooter";

class PickUpComponent extends Component {
  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    const {
      pickUp, promise, updateFieldValue, updateLineFieldValue, history, updatePickUp, updatePickUpFieldValue,
    } = this.props;

    const handleChange = (event) => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => (event) => {
      updateLineFieldValue({index: y, key: event.target.name, value: event.target.value});
    };

    const handlePickUpUpdate = event => {
      updatePickUpFieldValue({key: event.target.name, value: event.target.value});
    };

    return (
      <div className="PickUp">
        {promise.isPending && (<CircularProgress className="progress"/>)}
        {promise.isFulfilled && (
          <div>
            <Header
              header={pickUp.header}
              title={constants.TASK.PICK_UP_TITLE}
              handleChange={handleChange}
            />
            {pickUp.pickUpLineItems.map((x, y) => (
              <PickUpLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
            ))}
            <Divider variant="inset"/>
            <PickUpFooter pickUp={pickUp} handleChange={handlePickUpUpdate} />
            <Divider variant="inset"/>
            <div className="PickUp--Actions">
              <Button size="medium" className="Actions-btn" onClick={() => history.goBack()}>
                Cancel
              </Button>
              <Button variant="outlined" size="medium" color="secondary" className="Actions-btn"
                      onClick={() => updatePickUp(constants.tasks.actions.APPROVE, history)}>
                Complete Approval
              </Button>
              <Button variant="outlined" size="medium" color="error" className="Actions-btn"
                      onClick={() => updatePickUp(constants.tasks.actions.REJECT, history)}>
                Reject
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updatePickUpFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  updatePickUp: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  pickUp: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default PickUpComponent;
