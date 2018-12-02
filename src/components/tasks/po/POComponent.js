import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './po.scss';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import POLine from './POLine';
import POPrice from './POPrice';
import Footer from '../common/footer/Footer';
import Divider from '@material-ui/core/Divider/Divider';
import Actions from '../common/actions/Actions';

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const { po, promise, updateFieldValue, updateLineFieldValue, history } = this.props;

    const handleChange = event => {
      updateFieldValue({ key: event.target.name, value: event.target.value });
    };

    const handleLineItemChange = y => event => {
      updateLineFieldValue({ index: y, key: event.target.name, value: event.target.value });
    };

    return (
      <div className="PO container">
        {/* Header */}
        {promise.isFulfilled && (
          <div>
            <Header
              header={po.header}
              title={constants.TASK.PO_AMENDMENT_TITLE}
              handleChange={handleChange}
            />
            {po.poLineItems.map((x, y) => (
              <POLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)} />
            ))}
            <POPrice lines={po.poLineItems} />
            <Divider variant="inset" />
            <Footer items={po.footer} />
            <Divider variant="inset" />
            <Actions history={history} />
          </div>
        )}
      </div>
    );
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  po: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default POComponent;
