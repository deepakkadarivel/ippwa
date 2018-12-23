import advanceInitialState from "./advanceInitialState";
import advanceActionTypes from "./advanceActionTypes";

const advanceReducer = (state = advanceInitialState, action) => {
  switch (action.type) {
    case advanceActionTypes.SET_VALUE:
      return state.set(action.name, action.value);
    case advanceActionTypes.SET_ENTITY_DETAILS:
      return state.set('viewList', action.entityDetails.viewList)
        .set('workflowList', action.entityDetails.workflowList);
    case advanceActionTypes.IS_FETCHING_ENTITY_DETAILS:
      return state.set('isFetchingEntityDetails', action.isFetchingEntityDetails);
    default:
      return state;
  }
};

export default advanceReducer;

