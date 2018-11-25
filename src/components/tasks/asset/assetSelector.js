import { get } from 'lodash';

export const selectAsset = state => get(state, 'asset.asset');
export const selectAssetPromise = state => get(state, 'asset.promise.asset');