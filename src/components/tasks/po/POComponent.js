import React, {Component} from "react";
import PropTypes from 'prop-types';

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    return (
      <div>
        PO Component
      </div>
    )
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
};

export default POComponent;
