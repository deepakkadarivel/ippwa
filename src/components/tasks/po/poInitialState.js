import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const poInitialState = seamlessImmutable({
  promise: {
    po: setPromiseState()
  },
  errorMessage: '',
  po: {},
});

export default poInitialState;