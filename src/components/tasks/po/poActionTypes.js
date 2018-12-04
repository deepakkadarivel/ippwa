const poActionTypes = {
  PO: {
    pending: 'po/pending',
    fulfilled: 'po/fulfilled',
    rejected: 'po/rejected'
  },
  UPDATE_PO: {
    pending: 'updatePO/pending',
    fulfilled: 'updatePO/fulfilled',
    rejected: 'updatePO/rejected'
  },
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_PO: 'SET_PO',
  SET_PO_APPROVAL_RESPONSE: 'SET_PO_APPROVAL_RESPONSE',
  UPDATE_PO_HEADER_FIELD_VALUE: 'UPDATE_PO_HEADER_FIELD_VALUE',
  UPDATE_PO_LINE_FIELD_VALUE: 'UPDATE_PO_LINE_FIELD_VALUE',
};

export default poActionTypes;
