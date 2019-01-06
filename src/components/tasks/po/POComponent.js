import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './po.scss';
import constants from '../../../shared/constants';
import POLine from './components/POLine';
import POPrice from './components/POPrice';
import Button from "@material-ui/core/Button/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import POFooter from "./components/POFooter";
import POHeader from "./components/POHeader";
import Btn from "../../common/Button/Button";

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const {po, promise, updateFieldValue, updateLineFieldValue, history, updatePO, updatePOFieldValue} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = (y, name, value) => {
      updateLineFieldValue({index: y, key: name, value: value});
    };

    const handlePOUpdate = event => {
      updatePOFieldValue({key: event.target.name, value: event.target.value});
    };

    return (
      <div className="PO container">
        {promise.isFulfilled && (
          <div>
            <h4>PO Amendment</h4>
            <POHeader po={po} handleChange={handleChange}/>
            <POLine handleLineItemChange={handleLineItemChange} lines={po.poLineItems}/>
            <POPrice lines={po.poLineItems}/>
            <POFooter po={po} handleChange={handlePOUpdate}/>
            <div className="Form--fields PO__actions">
              <Btn label='Cancel' onClick={() => history.goBack()} />
              <Btn label='Reject' color='secondary' onClick={() => updatePO(constants.tasks.actions.REJECT, history)} />
              <Btn label='Complete Approval' color='primary' onClick={() => updatePO(constants.tasks.actions.APPROVE, history)} />
            </div>
          </div>
        )}
        {promise.isPending && (<CircularProgress className="progress"/>)}
      </div>
    );
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  updatePOFieldValue: PropTypes.func.isRequired,
  updatePO: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  po: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default POComponent;
