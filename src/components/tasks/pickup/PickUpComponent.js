import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from "../common/header/Header";
import constants from "../../../shared/constants";

class PickUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getPickUp(this.props.selectedTask);
  }

  render() {
    const {
      pickUp,
      promise,
    } = this.props;

    const handleSelectChange = prop => event => {
      this.setState({[prop]: event.target.value});
    };

    return (
      <div className='PickUp container'>
        {/* Header */}
        {promise.isFulfilled &&
        <Header header={pickUp.header} title={constants.PO.PO_TITLE} handleSelectChange={handleSelectChange}/>}
      </div>
    )
  }
}

PickUpComponent.propTypes = {
  getPickUp: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  pickUp: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default PickUpComponent;
