import React from 'react';
import PropTypes from 'prop-types';
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
import CardHeader from '@material-ui/core/CardHeader';
import styles from './styles';
import constants from '../../shared/constants';
import menuConstants from './constants';
import {getValue} from '../../shared/service/localStorage';

const Drawer = props => {

  const {classes, isDrawerOpen, toggleDrawer} = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        <div className={classes.header}>
          <div className={classes.headerLogo}/>
          <CardHeader className={classes.headerDetail}
            avatar={<AccountCircle color="primary" fontSize="large" />}
            title={` ${getValue(constants.LOCAL_STORAGE.FIRST_NAME)} ${getValue(constants.LOCAL_STORAGE.LAST_NAME)}`}
            subheader={getValue(constants.LOCAL_STORAGE.ORG_NAME)}
          />
        </div>
        <Divider/>
        <ListItem button>
          <ListItemIcon>{<ListAlt/>}</ListItemIcon>
          <ListItemText primary={menuConstants.MY_TASKS}/>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{<BarChartIcon/>}</ListItemIcon>
          <ListItemText primary={menuConstants.REPORTS}/>
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem button>
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
  toggleDrawer: PropTypes.func,
};

Drawer.defaultProps = {
  isDrawerOpen: false,
};

export default withStyles(styles)(Drawer);