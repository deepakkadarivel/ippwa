import {connect} from 'react-redux';
import AdvanceComponent from "./AdvanceComponent";
import {setValue, fetchEntityDetails} from './advanceActions';
import {getEntityList, getCurrencies} from "../../login/authSelector";
import {
  selectEntityId,
  selectViewList,
  selectWorkflowList,
  selectViewId,
  selectWorkflowId,
  selectCurrencyId,
  selectNeedByDate,
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
    viewList: selectViewList(state),
    workflowList: selectWorkflowList(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: (name, value) => {
      dispatch(setValue(name, value))
    },
    fetchEntityDetails: () => {
      dispatch(fetchEntityDetails())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdvanceComponent);
