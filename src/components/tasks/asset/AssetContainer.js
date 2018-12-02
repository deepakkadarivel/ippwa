import { connect } from 'react-redux';
import AssetComponent from './AssetComponent';

import { getAsset, updateFieldValue, updateLineFieldValue } from './assetActions';
import { selectAsset, selectAssetPromise } from './assetSelector';

const mapStateToProps = state => {
  return {
    selectedTask: state.tasks.selectedTask,
    promise: selectAssetPromise(state),
    errorMessage: state.asset.errorMessage,
    asset: selectAsset(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAsset(task) {
      dispatch(getAsset(task));
    },
    updateFieldValue(item) {
      dispatch(updateFieldValue(item));
    },
    updateLineFieldValue(item) {
      dispatch(updateLineFieldValue(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetComponent);
