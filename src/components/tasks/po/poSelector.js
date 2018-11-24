import { get } from 'lodash';

export const selectPO = state => get(state, 'po.po');
export const selectPOPromise = state => get(state, 'po.promise.po');