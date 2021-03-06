import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const poInitialState = seamlessImmutable({
  promise: {
    po: setPromiseState(),
    updatePO: setPromiseState()
  },
  errorMessage: '',
  po: {},
  poApprovalResponse: {},
});

export default poInitialState;
