import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import Chip from "@material-ui/core/Chip";
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import './style.scss';
import {default as Btn} from "@material-ui/core/Button/Button";

const required = value => (value == null ? 'Required' : undefined);

class AdvanceComponent extends Component {

  componentWillReceiveProps(props) {
    const {entityId, fetchEntityDetails} = this.props;
    if (props.entityId !== entityId && props.entityId !== '') {
      fetchEntityDetails();
    }
    if (props.isItemsVisible) {
      // props.fetchItemData();
    }
  }

  handleChange = event => {
    this.props.setValue(event.target.name, event.target.value);
  };

  handleDateChange = date => {
    console.log(date);
    // needByDate
    // this.props.setValue(moment(date).format('DD-MM-YYYY'));
    this.props.setValue('needByDate', date);
  };

  renderForm = () => {
    const {viewId, workflowId, currencyId, needByDate, comments, viewList, workflowList, currencies} = this.props;
    return (
      <div className='Advance__Form--fields'>
        <TextField
          id='viewId'
          name='viewId'
          select
          label="View"
          className='Advance__Form--control'
          value={viewId}
          onChange={this.handleChange}
          helperText="Choose a view type"
          margin="normal"
          variant="outlined"
        >
          {viewList.map(view => <MenuItem key={view.viewId} value={view.viewId}>{view.viewName}</MenuItem>)}
        </TextField>

        <TextField
          id='workflowId'
          name='workflowId'
          select
          label="Workflow"
          className='Advance__Form--control'
          value={workflowId}
          onChange={this.handleChange}
          helperText="Choose a workflow type"
          margin="normal"
          variant="outlined"
        >
          {workflowList.map(workflow => <MenuItem key={workflow.workflowId}
                                                  value={workflow.workflowId}>{workflow.workflowName}</MenuItem>)}
        </TextField>

        <TextField
          id='currencyId'
          name='currencyId'
          select
          label="Currency"
          className='Advance__Form--control'
          value={currencyId}
          onChange={this.handleChange}
          helperText="Choose a currency"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(currency => <MenuItem key={currency.currencyCode.currencyId}
                                                value={currency.currencyCode.currencyId}>{`${currency.currencyCode.symbol} ${currency.currencyCode.code}`}</MenuItem>)}
        </TextField>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label="Need By Date"
            className='Advance__Form--control'
            // format={'DD-MM-YYYY'}
            autoOk={true}
            value={needByDate}
            onChange={this.handleDateChange}
            animateYearScrolling
            variant="outlined"
          />
        </MuiPickersUtilsProvider>

        <TextField
          id="comments"
          name='comments'
          label="Comments"
          value={comments}
          multiline
          rows="4"
          className='Advance__Form--control'
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="file"
          name='file'
          label="Upload"
          // value={comments}
          InputLabelProps={{
            shrink: true,
          }}
          className='Advance__Form--control'
          // onChange={this.handleChange}
          type='file'
          margin="normal"
          variant="outlined"
        />

      </div>
    )
  };

  render() {
    const {entityId, itemData, entityList, viewList, isItemsVisible, isFetchingItemData, shouldShowItems, isFetchingEntityDetails, fetchItemData} = this.props;

    function Transition(props) {
      return <Slide direction="up" {...props} />;
    }

    const renderDialog = () => {
      return (
        <Dialog
          fullScreen
          open={isItemsVisible}
          onClose={shouldShowItems}
          TransitionComponent={Transition}
        >
          <AppBar className='Advance__appbar'>
            <Toolbar>
              <IconButton color="inherit" onClick={shouldShowItems} aria-label="Close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" color="inherit" className='Advance__appbar--flex'>
                Sound
              </Typography>
              <Button color="inherit" onClick={shouldShowItems}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania"/>
            </ListItem>
            <Divider/>
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
            </ListItem>
          </List>
        </Dialog>
      )
    };

    const renderForm = () => {
      return (
        <div className='Advance__Form'>
          <Chip color="secondary" icon={<AttachMoney/>} variant="outlined" label='Advance'/>
          <div className='Advance__Form--fields'>
            <TextField
              id='entityId'
              name='entityId'
              select
              label="Entity"
              className='Advance__Form--control'
              value={entityId}
              onChange={this.handleChange}
              helperText="Choose an entity"
              margin="normal"
              variant="outlined"
            >
              {entityList.map(entity =>
                <MenuItem
                  key={entity.entityId}

                  value={entity.entityId}>
                  {entity.entityName}
                </MenuItem>
              )}
            </TextField>
          </div>
          {viewList.length > 0 && this.renderForm()}
        </div>
      )
    };

    return (
      <div className='Advance'>
        {renderForm()}
        {isFetchingEntityDetails && (<CircularProgress className="progress"/>)}
        {(entityId > 0 && !isFetchingEntityDetails) &&
        <div className='Advance__add'><Button
          variant="outlined"
          color="primary"
          // className='Advance__add'
          onClick={fetchItemData}
          disabled={isFetchingItemData}
        >
          <PlaylistAdd className='Advance__add--leftIcon'/>
          Add Item
        </Button>
          {isFetchingItemData && <CircularProgress size={24} className='Advance__add--progress'/>}
        </div>}
        {itemData && isItemsVisible && renderDialog()}
      </div>
    );
  }
}

AdvanceComponent.propTypes = {
  setValue: PropTypes.func.isRequired,
  fetchEntityDetails: PropTypes.func.isRequired,
  entityList: PropTypes.array.isRequired,
  currencies: PropTypes.array.isRequired,
  viewList: PropTypes.array.isRequired,
  workflowList: PropTypes.array.isRequired,
  itemData: PropTypes.array.isRequired,
  isFetchingEntityDetails: PropTypes.bool.isRequired,
  isFetchingItemData: PropTypes.bool.isRequired,
  isItemsVisible: PropTypes.bool.isRequired,
  shouldShowItems: PropTypes.func.isRequired,
  fetchItemData: PropTypes.func.isRequired,

  entityId: PropTypes.number.isRequired,
  viewId: PropTypes.number.isRequired,
  workflowId: PropTypes.number.isRequired,
  currencyId: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
};

export default AdvanceComponent;