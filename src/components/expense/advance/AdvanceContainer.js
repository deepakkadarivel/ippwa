import {connect} from 'react-redux';
import AdvanceComponent from "./AdvanceComponent";
import {setValue, fetchEntityDetails, shouldShowItems, fetchItemData} from './advanceActions';
import {getEntityList, getCurrencies} from "../../login/authSelector";
import {
  selectEntityId,
  selectViewList,
  selectWorkflowList,
  selectViewId,
  selectWorkflowId,
  selectCurrencyId,
  selectNeedByDate,
  selectComments,
  isItemsVisible,
  isFetchingEntityDetails,
  isFetchingItemData,
  selectItemData,
} from "./advanceSelector";

const mapStateToProps = state => {
  return {
    entityList: getEntityList(),
    currencies: getCurrencies(),
    entityId: selectEntityId(state),
    viewId: selectViewId(state),
    workflowId: selectWorkflowId(state),
    currencyId: selectCurrencyId(state),
    needByDate: selectNeedByDate(state),
    comments: selectComments(state),
    viewList: selectViewList(state),
    workflowList: selectWorkflowList(state),
    isItemsVisible: isItemsVisible(state),
    isFetchingEntityDetails: isFetchingEntityDetails(state),
    isFetchingItemData:isFetchingItemData(state),
    itemData:selectItemData(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(setValue(name, value))
    },
    fetchEntityDetails: () => {
      dispatch(fetchEntityDetails())
    },
    shouldShowItems: () => {
      dispatch(shouldShowItems())
    },
    fetchItemData: () => {
      dispatch(fetchItemData())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceComponent);
