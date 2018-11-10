import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../shared/service/promiseState';

const loginInitialState = seamlessImmutable({
  promise: {
    login: setPromiseState()
  },
  errorMessage: '',
});

export default loginInitialState;