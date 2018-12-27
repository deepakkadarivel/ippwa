import {get} from 'lodash';

const selectEntityId = state => get(state, 'advance.entityId');
const selectViewId = state => get(state, 'advance.viewId');
const selectWorkflowId = state => get(state, 'advance.workflowId');
const selectCurrencyId = state => get(state, 'advance.currencyId');
const selectNeedByDate = state => get(state, 'advance.needByDate');
const selectComments = state => get(state, 'advance.comments');
const selectViewList = state => get(state, 'advance.viewList');
const selectWorkflowList = state => get(state, 'advance.workflowList');

export {
  selectEntityId,
  selectViewList,
  selectWorkflowList,
  selectViewId,
  selectWorkflowId,
  selectCurrencyId,
  selectNeedByDate,
  selectComments,
};