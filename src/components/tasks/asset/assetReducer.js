import assetActionTypes from './assetActionTypes';
import assetInitialState from './assetInitialState';
import setPromiseState from '../../../shared/service/promiseState';

const assetReducer = (state = assetInitialState, action) => {
  switch (action.type) {
    case assetActionTypes.ASSET.fulfilled:
      return state.setIn(
        ['promise', 'asset'],
        setPromiseState(false, true, false)
      );

    case assetActionTypes.ASSET.pending:
      return state.setIn(
        ['promise', 'asset'],
        setPromiseState(true, false, false)
      ).set('errorMessage', assetInitialState.errorMessage);

    case assetActionTypes.ASSET.rejected:
      return state.setIn(
        ['promise', 'asset'],
        setPromiseState(false, false, true)
      );

    case assetActionTypes.SET_ERROR_MESSAGE:
      return state.set('errorMessage', action.message);

    case assetActionTypes.SET_ASSET:
      return state.set('asset', action.asset);

    case assetActionTypes.UPDATE_ASSET_HEADER_FIELD_VALUE:
      const updatedHeader = action.asset.header.map(x => {
        if (x.name === action.item.key) {
          return {...x, value: action.item.value};
        }
        return x;
      });
      return state.setIn(['asset', 'header'], updatedHeader);

    case assetActionTypes.UPDATE_ASSET_LINE_FIELD_VALUE:
      const updatedLines = action.asset.assetLineItems.map(x => {
        if (x.header.label === action.item.header) {
          x.map(y => {
            if (y.header === action.item.key) {
              return {...y, value: action.item.value};
            }
            return y;
          })
        }
        return x;
      });
      return state.setIn(['asset', 'assetLineItems', 'lines'], updatedLines);

    default:
      return state;
  }
};

export default assetReducer;