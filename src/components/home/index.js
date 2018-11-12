import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from '../navBar';
import Drawer from '../SwipeableDrawer';
import MyTasksContainer from '../myTasks/MyTasksContainer';
import Reports from '../reports';
import Expense from '../expense';
import history from '../../shared/service/history';
import './styles.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false,
    }
  }

  componentDidMount() {
    if (this.props.match.url === '/home') {
      history.push(`${this.props.match.url}/tasks`);
    } else if (this.props.match.url === '/home/') {
      history.push(`${this.props.match.url}tasks`);
    }
  }

  render() {
    const toggleDrawer = isDrawerOpen => {
      this.setState({
        isDrawerOpen,
      });
    };

    return <div>
      <NavBar isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <Drawer isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <div className='Home-body'>
        <Route path={`${this.props.match.url}/tasks`} render={() => <MyTasksContainer/>}/>
        <Route path={`${this.props.match.url}/reports`} render={() => <Reports/>}/>
        <Route path={`${this.props.match.url}/expense`} render={() => <Expense/>}/>
      </div>
    </div>;
  }
}

export default Home;