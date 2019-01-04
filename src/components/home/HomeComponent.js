import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../common/navBar';
import Drawer from '../common/SwipeableDrawer';
import MyTasksContainer from '../tasks/myTasks/MyTasksContainer';
import Reports from '../reports';
import ExpenseContainer from '../expense/ExpenseContainer';
import history from '../../shared/service/history';
import POContainer from '../tasks/po/POContainer';
import PickUpContainer from '../tasks/pickup/PickUpContainer';
import InvoiceContainer from '../tasks/invoice/InvoiceContainer';
import AssetContainer from '../tasks/asset/AssetContainer';
import './home.scss';
import AppSnackBar from "../common/appSnackBar";
import AdvanceContainer from "../expense/advance/AdvanceContainer";
import ClaimComponent from "../expense/claim/ClaimComponent";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawerOpen: false
    };
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
        isDrawerOpen
      });
    };

    const {toast, handleToastClose, match} = this.props;

    return (
      <div className="Home">
        <NavBar isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Drawer isDrawerOpen={this.state.isDrawerOpen} toggleDrawer={toggleDrawer} />
        <AppSnackBar variant={toast.variant} message={toast.message} open={toast.isOpen} handleClose={() => handleToastClose()}/>
        <div>
          <Route
            exact
            path={`${match.url}/tasks`}
            render={() => <MyTasksContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/reports`}
            render={() => <Reports history={history} />}
          />
          <Route
            exact
            path={`${match.url}/expense`}
            render={() => <ExpenseContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/tasks/po`}
            render={() => <POContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/tasks/pickUp`}
            render={() => <PickUpContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/tasks/invoice`}
            render={() => <InvoiceContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/tasks/asset`}
            render={() => <AssetContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/expense/advance`}
            render={() => <AdvanceContainer history={history} />}
          />
          <Route
            exact
            path={`${match.url}/expense/claim`}
            render={() => <ClaimComponent history={history} />}
          />
        </div>
      </div>
    );
  }
}

export default HomeComponent;
