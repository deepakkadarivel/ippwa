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
  UPDATE_PO_HEADER_FIELD_VALUE: 'UPDATE_PO_HEADER_FIELD_VALUE',
  UPDATE_PO_LINE_FIELD_VALUE: 'UPDATE_PO_LINE_FIELD_VALUE',
  PO_CONFIRM: 'PO_CONFIRM',
  PO_REJECT: 'PO_REJECT',
  PO_CANCEL: 'PO_CANCEL'
};

export default poActionTypes;
