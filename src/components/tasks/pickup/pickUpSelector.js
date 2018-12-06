import { get } from 'lodash';

export const selectPickUp = state => get(state, 'pickUp.pickUp');
export const selectPickUpApprovalResponse= state => get(state, 'pickUp.pickUpApprovalResponse');
export const selectPickUpPromise = state => get(state, 'pickUp.promise.pickUp');
