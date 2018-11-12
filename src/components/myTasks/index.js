import React, {Component} from 'react';
import DesktopTable from "./desktop";
import './styles.scss'
import PropTypes from "prop-types";

class MyTasks extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    return (<div>
      <div className='MyTasks-Desktop'>
        <DesktopTable tasks={this.props.tasks}/>
      </div>
    </div>);
  }
}

MyTasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  promise: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default MyTasks;

