import {connect} from 'react-redux';
import AssetComponent from './AssetComponent';

import {
  getAsset,
} from './assetActions';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: state.asset.promise.asset,
    errorMessage: state.asset.errorMessage,
    asset: state.asset.asset,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAsset(task) {
      dispatch(getAsset(task));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetComponent)