import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { login } from './loginActions';

const mapStateToProps = state => {
  return {
    promise: state.login.promise.login,
    errorMessage: state.login.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login(userName, password) {
      dispatch(login(userName, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
