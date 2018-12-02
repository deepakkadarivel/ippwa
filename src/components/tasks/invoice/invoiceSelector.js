import { get } from 'lodash';

export const selectInvoice = state => get(state, 'invoice.invoice');
export const selectInvoicePromise = state => get(state, 'invoice.promise.invoice');
