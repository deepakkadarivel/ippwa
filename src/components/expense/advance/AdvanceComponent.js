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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.scss';
import Checkbox from '@material-ui/core/Checkbox';

class AdvanceComponent extends Component {
  state = {
    checked: [0],
    billableChecked: [0],
  };

  handleToggle = value => () => {
    const {checked} = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleBillToggle = value => () => {
    const {billableChecked} = this.state;
    const currentIndex = billableChecked.indexOf(value);
    const newChecked = [...billableChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      billableChecked: newChecked,
    });
  };

  componentWillReceiveProps(props) {
    const {entityId, fetchEntityDetails} = this.props;
    if (props.entityId !== entityId && props.entityId !== '') {
      fetchEntityDetails();
    }
  }

  handleChange = event => {
    this.props.setValue(event.target.name, event.target.value);
  };

  handleDateChange = date => {
    console.log(date);
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
    const renderDialog = () => {
      return (
        <Dialog
          fullScreen
          open={itemData && isItemsVisible}
          onClose={shouldShowItems}
        >
          <AppBar className='Advance__appbar'>
            <Toolbar>
              <IconButton color="inherit" onClick={shouldShowItems} aria-label="Close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" className='Advance__appbar--flex'>
                Add Items
              </Typography>
              <Button onClick={shouldShowItems}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List className='Advance__appbar--list'>
            {itemData.rows.map(row => (
              <ExpansionPanel>
                <ExpansionPanelSummary>
                  <ListItem key={row.ITEM_NO} role={undefined} dense button onClick={this.handleToggle(row.ITEM_NO)}>
                    <Checkbox
                      checked={this.state.checked.indexOf(row.ITEM_NO) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                    <ListItemText primary={`#${row.ITEM_NO} - ${row.DESC1}`}/>
                  </ListItem>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='Advance__appbar--list--fields'>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.billableChecked.indexOf(row.ITEM_NO) !== -1}
                        tabIndex={-1}
                        disableRipple
                        onChange={this.handleBillToggle(row.ITEM_NO)}
                      />}
                    label="Billable"
                  />
                  <TextField
                    id="amount"
                    name='Amount'
                    label="Amount"
                    value=''
                    className='Advance__Form--control'
                    onChange={() => {}}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="comments"
                    name='comments'
                    label="Comments"
                    value=''
                    multiline
                    rows="4"
                    className='Advance__Form--control'
                    onChange={() => {}}
                    margin="normal"
                    variant="outlined"
                  />

                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}
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