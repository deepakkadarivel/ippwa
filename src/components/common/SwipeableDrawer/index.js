import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAlt from '@material-ui/icons/ListAlt';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AttachMoney from '@material-ui/icons/AttachMoney';
import styles from './styles';
import constants from '../../../shared/constants';
import menuConstants from './constants';
import {getValue} from '../../../shared/service/localStorage';
import history from "../../../shared/service/history";

const Drawer = props => {
  const {classes, isDrawerOpen, toggleDrawer} = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button={false} key={'User'}>
          <ListItemIcon>{<AccountCircle color="secondary" fontSize="large"/>}</ListItemIcon>
          <ListItemText
            primary={`${getValue(constants.LOCAL_STORAGE.FIRST_NAME)} ${getValue(
              constants.LOCAL_STORAGE.LAST_NAME
            )}`}
          />
        </ListItem>
        <Divider/>

        <Link to="/home/tasks" className={classes.link}>
          <ListItem button key={menuConstants.MY_TASKS}>
            <ListItemIcon>{<ListAlt/>}</ListItemIcon>
            <ListItemText primary={menuConstants.MY_TASKS}/>
          </ListItem>
        </Link>
        <Link to="/home/expense" className={classes.link}>
          <ListItem button key={menuConstants.EXPENSE}>
            <ListItemIcon>{<AttachMoney/>}</ListItemIcon>
            <ListItemText primary={menuConstants.EXPENSE}/>
          </ListItem>
        </Link>
        <Link to="/home/reports" className={classes.link}>
          <ListItem button key={menuConstants.REPORTS}>
            <ListItemIcon>{<BarChartIcon/>}</ListItemIcon>
            <ListItemText primary={menuConstants.REPORTS}/>
          </ListItem>
        </Link>
      </List>
      <Divider/>

      <List>
        <ListItem button key={menuConstants.LOG_OUT} onClick={() => {
          localStorage.clear();
          history.push('/login');
        }}>
          <ListItemIcon>{<ExitToApp/>}</ListItemIcon>
          <ListItemText primary={menuConstants.LOG_OUT}/>
        </ListItem>
      </List>
    </div>
  );
  const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return (
    <div>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
};

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

Drawer.defaultProps = {
  isDrawerOpen: false
};

export default withStyles(styles)(Drawer);
