import assetActionTypes from './assetActionTypes';
import assetInitialState from './assetInitialState';
import setPromiseState from '../../../shared/service/promiseState';
import pickUpActionTypes from '../pickup/pickUpActionTypes';

const assetReducer = (state = assetInitialState, action) => {
  switch (action.type) {
    case assetActionTypes.ASSET.fulfilled:
      return state.setIn(['promise', 'asset'], setPromiseState(false, true, false));

    case assetActionTypes.ASSET.pending:
      return state
        .setIn(['promise', 'asset'], setPromiseState(true, false, false))
        .set('errorMessage', assetInitialState.errorMessage);

    case assetActionTypes.ASSET.rejected:
      return state.setIn(['promise', 'asset'], setPromiseState(false, false, true));

    case assetActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case assetActionTypes.SET_ASSET:
      return state.set('asset', action.asset);

    case assetActionTypes.UPDATE_ASSET_HEADER_FIELD_VALUE:
      const updatedHeader = action.asset.header.map(x => {
        if (x.name === action.item.key) {
          return { ...x, value: action.item.value };
        }
        return x;
      });
      return state.setIn(['asset', 'header'], updatedHeader);

    case assetActionTypes.UPDATE_ASSET_LINE_FIELD_VALUE:
      const items = action.asset.assetLineItems[action.item.index];
      const lines = items.lines.map(x => {
        if (x.name === action.item.key) {
          return { ...x, value: action.item.value };
        }
        return x;
      });
      const updatedLines = action.asset.assetLineItems.map((line, i) => {
        if (i === action.item.index) {
          return { header: line.header, lines };
        }
        return line;
      });
      return state.setIn(['asset', 'assetLineItems'], updatedLines);

    default:
      return state;
  }
};

export default assetReducer;
