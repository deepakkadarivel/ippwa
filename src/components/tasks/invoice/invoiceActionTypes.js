const invoiceActionTypes = {
  INVOICE: {
    pending: 'INVOICE/pending',
    fulfilled: 'INVOICE/fulfilled',
    rejected: 'INVOICE/rejected'
  },
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_INVOICE: 'SET_INVOICE',
  UPDATE_INVOICE_HEADER_FIELD_VALUE: 'UPDATE_INVOICE_HEADER_FIELD_VALUE',
  UPDATE_INVOICE_LINE_FIELD_VALUE: 'UPDATE_INVOICE_LINE_FIELD_VALUE'
};

export default invoiceActionTypes;
