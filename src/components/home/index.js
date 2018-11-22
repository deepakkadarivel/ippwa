import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {Route} from 'react-router-dom';

import NavBar from '../navBar';
import Drawer from '../SwipeableDrawer';
import MyTasksContainer from '../tasks/myTasks/MyTasksContainer';
import Reports from '../reports';
import Expense from '../expense';
import history from '../../shared/service/history';
import styles from './styles';
import POContainer from '../tasks/po/POContainer';
import PickUpContainer from "../tasks/pickup/PickUpContainer";
import InvoiceContainer from "../tasks/invoice/InvoiceContainer";
import AssetContainer from "../tasks/asset/AssetContainer";

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
    const {classes} =this.props;
    const toggleDrawer = isDrawerOpen => {
      this.setState({
        isDrawerOpen,
      });
    };

    return <div className={classes.root}>
      <NavBar isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <Drawer isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer}/>
      <div>
        <Route exact path={`${this.props.match.url}/tasks`} render={() => <MyTasksContainer history={history}/>}/>
        <Route exact path={`${this.props.match.url}/reports`} render={() => <Reports history={history}/>}/>
        <Route exacrt path={`${this.props.match.url}/expense`} render={() => <Expense history={history}/>}/>
        <Route exacrt path={`${this.props.match.url}/tasks/po`} render={() => <POContainer history={history}/>}/>
        <Route exacrt path={`${this.props.match.url}/tasks/pickUp`} render={() => <PickUpContainer history={history}/>}/>
        <Route exacrt path={`${this.props.match.url}/tasks/invoice`} render={() => <InvoiceContainer history={history}/>}/>
        <Route exacrt path={`${this.props.match.url}/tasks/asset`} render={() => <AssetContainer history={history}/>}/>
      </div>
    </div>;
  }
}

export default withStyles(styles)(Home);