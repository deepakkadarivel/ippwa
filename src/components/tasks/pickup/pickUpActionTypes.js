const pickUpActionTypes = {
  PICK_UP: {
    pending: 'PICK_UP/pending',
    fulfilled: 'PICK_UP/fulfilled',
    rejected: 'PICK_UP/rejected'
  },
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_PICK_UP: 'SET_PICK_UP',
  UPDATE_PICK_UP_HEADER_FIELD_VALUE: 'UPDATE_PICK_UP_HEADER_FIELD_VALUE',
  UPDATE_PICK_UP_LINE_FIELD_VALUE: 'UPDATE_PICK_UP_LINE_FIELD_VALUE',
};

export default pickUpActionTypes;