import React, {Component} from 'react';
import Responsive from 'react-responsive';
import withStyles from '@material-ui/core/styles/withStyles';
import DesktopTable from "./desktop";
import MobileTable from "./mobile";
import './styles.scss'
import PropTypes from "prop-types";
import styles from './styles';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class MyTasks extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    const { classes } = this.props;
    return (<div>
      <div className={classes.root}>
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
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default withStyles(styles)(MyTasks);

