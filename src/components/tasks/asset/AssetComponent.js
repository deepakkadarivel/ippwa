import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from '../common/header/Header';
import constants from '../../../shared/constants';
import Divider from '@material-ui/core/Divider/Divider';
import Footer from '../common/footer/Footer';
import AssetLine from "./AssetLine";
import Button from "@material-ui/core/Button/Button";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

class AssetComponent extends Component {
  componentDidMount() {
    this.props.getAsset(this.props.selectedTask);
  }

  render() {
    const {asset, promise, updateFieldValue, updateLineFieldValue, history, updateAsset} = this.props;

    const handleChange = event => {
      updateFieldValue({key: event.target.name, value: event.target.value});
    };

    const handleLineItemChange = y => event => {
      updateLineFieldValue({index: y, key: event.target.name, value: event.target.value});
    };

    return (
      <div className="Asset">
        {promise.isPending && (<CircularProgress className="progress"/>)}
        {promise.isFulfilled && (
          <div>
            <Header
              header={asset.header}
              title={constants.TASK.ASSET_TITLE}
              handleChange={handleChange}
            />
            {asset.assetLineItems.map((x, y) => (
              <AssetLine key={y} line={x} handleLineItemChange={handleLineItemChange(y)}/>
            ))}
            <Divider variant="inset"/>
            <Footer items={asset.footer}/>
            <Divider variant="inset"/>
            <div className="Asset--Actions">
              <Button size="medium" className="Actions-btn" onClick={() => history.goBack()}>
                Cancel
              </Button>
              <Button variant="outlined" size="medium" color="secondary" className="Actions-btn"
                      onClick={() => updateAsset(asset, '', 'approve', history)}>
                Complete Approval
              </Button>
              <Button variant="outlined" size="medium" color="error" className="Actions-btn"
                      onClick={() => updateAsset(asset, '', 'reject', history)}>
                Reject
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

AssetComponent.propTypes = {
  getAsset: PropTypes.func.isRequired,
  updateFieldValue: PropTypes.func.isRequired,
  updateLineFieldValue: PropTypes.func.isRequired,
  updateAsset: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  asset: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired
};

export default AssetComponent;
