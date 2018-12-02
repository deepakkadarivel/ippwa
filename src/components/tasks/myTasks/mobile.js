import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardActionArea from '@material-ui/core/CardActionArea';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import constants from '../../../shared/constants';
import { getString } from '../../../shared/utils/string';

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginTop: 20
  },
  cardContent: {
    paddingBottom: 0
  },
  actions: {
    display: 'flex',
    paddingTop: 0
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  title: {
    fontSize: 14
  },
  action: {
    marginLeft: 10
  }
});

class MyTasksCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes, task, history, setSelectedTask } = this.props;

    const columns = constants.tasks.columns;

    const handleClick = () => {
      setSelectedTask(task);
      switch (task.workflowTypeId) {
        case constants.TASKS_WORKFLOW_IDS.PO_REQUISITION_PROCESSING_TYPE:
          history.push('/home/tasks/po');
          break;
        case constants.TASKS_WORKFLOW_IDS.PICKUP_PROCESSING_TYPE:
          history.push('/home/tasks/pickUp');
          break;
        case constants.TASKS_WORKFLOW_IDS.INVOICE_PROCESSING_TYPE:
          history.push('/home/tasks/invoice');
          break;
        case constants.TASKS_WORKFLOW_IDS.ASSET_PROCESSING_TYPE:
          history.push('/home/tasks/asset');
          break;
        default:
          break;
      }
    };

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => handleClick()}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" component="h2" color="secondary">
              {task.workflowTypeName}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {task.createdDate}
            </Typography>
            <List>
              <ListItem divider>
                <ListItemText
                  primary={constants.tasks.columns.stageName}
                  secondary={getString(task.stageName)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={constants.tasks.columns.requestedBy}
                  secondary={getString(task.requestedBy)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={constants.tasks.columns.supplierName}
                  secondary={getString(task.supplierName)}
                />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          {/*<Button size="small" variant="outlined" className={classes.action}>*/}
          {/*{constants.actions.REJECT}*/}
          {/*</Button>*/}
          {/*<Button size="small" variant="outlined" color="secondary" className={classes.action}>*/}
          {/*{constants.actions.APPROVE}*/}
          {/*</Button>*/}
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <List>
              <ListItem divider>
                <ListItemText primary={columns.contractNo} secondary={getString(task.contractNo)} />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.contractOwner}
                  secondary={getString(task.contractOwner)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.poRequestNo}
                  secondary={getString(task.poRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText primary={columns.poNo} secondary={getString(task.poNo)} />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.pickUpRequestNo}
                  secondary={getString(task.pickUpRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText primary={columns.invoiceNo} secondary={getString(task.invoiceNo)} />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.assetRequestNo}
                  secondary={getString(task.assetRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.customerPONo}
                  secondary={getString(task.customerPONo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.customerInvoiceNo}
                  secondary={getString(task.customerInvoiceNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.quoteRequestNo}
                  secondary={getString(task.quoteRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.costingRequestNo}
                  secondary={getString(task.quoteRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.indentRequestNo}
                  secondary={getString(task.indentRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.quoteRequestNo}
                  secondary={getString(task.quoteRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.claimRequestNo}
                  secondary={getString(task.claimRequestNo)}
                />
              </ListItem>
              <ListItem divider>
                <ListItemText
                  primary={columns.dueDateString}
                  secondary={getString(task.dueDateString)}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={columns.status}
                  secondary={task.status === 0 ? 'Active' : getString(task.status.toString())}
                />
              </ListItem>
            </List>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

MyTasksCard.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object
};

MyTasksCard = withStyles(styles)(MyTasksCard);

const MobileTable = props => {
  return (
    <div>
      {props.tasks.map((task, index) => (
        <MyTasksCard
          key={index}
          task={task}
          history={props.history}
          setSelectedTask={props.setSelectedTask}
        />
      ))}
    </div>
  );
};

export default MobileTable;
