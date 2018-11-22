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

    default:
      return state;
  }
};

export default assetReducer;