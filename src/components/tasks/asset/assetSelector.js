import { get } from 'lodash';

export const selectAsset = state => get(state, 'asset.asset');
export const selectAssetApprovalResponse = state => get(state, 'asset.assetApprovalResponse');
export const selectAssetPromise = state => get(state, 'asset.promise.asset');
