import seamlessImmutable from 'seamless-immutable';
import setPromiseState from '../../../shared/service/promiseState';

const pickUpInitialState = seamlessImmutable({
  promise: {
    pickUp: setPromiseState(),
    updatePickUp: setPromiseState(),
  },
  errorMessage: '',
  pickUp: {},
  pickUpApprovalResponse: {},
});

export default pickUpInitialState;
