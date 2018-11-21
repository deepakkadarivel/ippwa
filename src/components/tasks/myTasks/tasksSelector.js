import { createSelector } from "reselect";
import constants from "../../../shared/constants";

const getTasks = state => state.tasks.tasks;

const allowedTaskTypes = [
  constants.TASKS_WORKFLOW_IDS.PO_REQUISITION_PROCESSING_TYPE,
  constants.TASKS_WORKFLOW_IDS.PICKUP_PROCESSING_TYPE,
  constants.TASKS_WORKFLOW_IDS.ASSET_PROCESSING_TYPE,
  constants.TASKS_WORKFLOW_IDS.INVOICE_PROCESSING_TYPE
];

const processTasks = tasks => {
  return tasks.filter(task => allowedTaskTypes.indexOf(task.workflowTypeId) !== -1);
};

const taskSelector = createSelector(
  [getTasks],
  processTasks
);

export { taskSelector };
