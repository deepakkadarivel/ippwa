import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const pickUpInitialState = seamlessImmutable({
  promise: {
    pickUp: setPromiseState()
  },
  errorMessage: '',
  pickUp: {}
});

export default pickUpInitialState;
