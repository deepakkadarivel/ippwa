import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const assetInitialState = seamlessImmutable({
  promise: {
    asset: setPromiseState(),
    updateAsset: setPromiseState(),
  },
  errorMessage: '',
  asset: {},
  assetApprovalResponse: {},
});

export default assetInitialState;
