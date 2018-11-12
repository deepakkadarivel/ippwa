import React, {Component} from 'react';
import Responsive from 'react-responsive';
import DesktopTable from "./desktop";
import MobileTable from "./mobile";
import './styles.scss'
import PropTypes from "prop-types";

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class MyTasks extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    return (<div>
      <div className='MyTasks-Desktop'>
        <Desktop><DesktopTable tasks={this.props.tasks}/></Desktop>
        <Tablet><DesktopTable tasks={this.props.tasks}/></Tablet>
        <Mobile><MobileTable tasks={this.props.tasks}/></Mobile>
        {/*<Default><DesktopTable tasks={this.props.tasks}/></Default>*/}
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

