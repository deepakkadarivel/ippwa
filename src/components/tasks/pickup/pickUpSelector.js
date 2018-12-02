import { get } from 'lodash';

export const selectPickUp = state => get(state, 'pickUp.pickUp');
export const selectPickUpPromise = state => get(state, 'pickUp.promise.pickUp');
