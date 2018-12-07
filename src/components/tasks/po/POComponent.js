import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './po.scss';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import POLine from './components/POLine';
import POPrice from './components/POPrice';
import Footer from '../common/footer/Footer';
import Divider from '@material-ui/core/Divider/Divider';
import Button from "@material-ui/core/Button/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import POFooter from "./components/POFooter";

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const {po, promise, updateFieldValue, updateLineFieldValue, history, updatePO, updatePOFieldValue} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => event => {
      updateLineFieldValue({index: y, key: event.target.name, value: event.target.value});
    };

    const handlePOUpdate = event => {
      updatePOFieldValue({key: event.target.name, value: event.target.value});
    };

    return (
      <div className="PO">
        {promise.isFulfilled && (
          <div>
            <Header
              header={po.header}
              title={constants.TASK.PO_AMENDMENT_TITLE}
              handleChange={handleChange}
            />
            {po.poLineItems.map((x, y) => (
              <POLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
            ))}
            <POPrice lines={po.poLineItems}/>
            <Divider variant="inset"/>
            <POFooter po={po} handleChange={handlePOUpdate}/>
            <Divider variant="inset"/>
            <div className="Actions">
              <Button size="medium" className="Actions-btn" onClick={() => history.goBack()}>
                Cancel
              </Button>
              <Button variant="outlined" size="medium" color="secondary" className="Actions-btn"
                      onClick={() => updatePO(constants.tasks.actions.APPROVE, history)}>
                Complete Approval
              </Button>
              <Button variant="outlined" size="medium" color="error" className="Actions-btn"
                      onClick={() => updatePO(constants.tasks.actions.REJECT, history)}>
                Reject
              </Button>
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
