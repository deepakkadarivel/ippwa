const assetActionTypes = {
  ASSET: {
    pending: 'ASSET/pending',
    fulfilled: 'ASSET/fulfilled',
    rejected: 'ASSET/rejected'
  },
  UPDATE_ASSET: {
    pending: 'UPDATE_ASSET/pending',
    fulfilled: 'UPDATE_ASSET/fulfilled',
    rejected: 'UPDATE_ASSET/rejected'
  },
  SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
  SET_ASSET: 'SET_ASSET',
  SET_ASSET_APPROVAL_RESPONSE: 'SET_ASSET_APPROVAL_RESPONSE',
  UPDATE_ASSET_HEADER_FIELD_VALUE: 'UPDATE_ASSET_HEADER_FIELD_VALUE',
  UPDATE_ASSET_LINE_FIELD_VALUE: 'UPDATE_ASSET_LINE_FIELD_VALUE'
};

export default assetActionTypes;
