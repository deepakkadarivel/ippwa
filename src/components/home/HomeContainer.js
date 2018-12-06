import {connect} from 'react-redux';
import {selectToast} from "./homeSelector";
import {handleToastClose} from "./homeActions";
import HomeComponent from "./HomeComponent";

const mapStateToProps = state => {
  return {
    toast: selectToast(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToastClose() {
      dispatch(handleToastClose());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
