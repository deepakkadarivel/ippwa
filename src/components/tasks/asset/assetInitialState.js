import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const assetInitialState = seamlessImmutable({
  promise: {
    asset: setPromiseState()
  },
  errorMessage: '',
  asset: {},
});

export default assetInitialState;