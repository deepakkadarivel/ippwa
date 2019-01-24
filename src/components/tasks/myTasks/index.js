import React, {Component} from 'react';
import DesktopTable from './desktop';
import './styles.scss';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import constants from "../../../shared/constants";

class MyTasks extends Component {
  componentWillMount() {
    this.props.getTasks();
  }

  render() {
    const {tasks, history, setSelectedTask, promise} = this.props;
    return (
      <div className='container'>
        <Typography component="h5" variant="h5" color="primary">
          {constants.TITLES.MY_TASKS}
        </Typography>
          <DesktopTable tasks={tasks} history={history} setSelectedTask={setSelectedTask} promise={promise}/>
      </div>
    );
  }
}

MyTasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  setSelectedTask: PropTypes.func.isRequired,
  promise: PropTypes.object.isRequired,
  errorMessage: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired
};

export default MyTasks;
