import { get } from 'lodash';

export const selectToast = state => get(state, 'home.toast');