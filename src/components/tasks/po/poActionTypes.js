const poActionTypes = {
  PO: {
    pending: 'po/pending',
    fulfilled: 'po/fulfilled',
    rejected: 'po/rejected'
  },
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_PO: 'SET_PO',
  UPDATE_PO_HEADER_FIELD_VALUE: 'UPDATE_PO_HEADER_FIELD_VALUE',
};

export default poActionTypes;