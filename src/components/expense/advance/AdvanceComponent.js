import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import TextField from '@material-ui/core/TextField';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Button from '@material-ui/core/Button';
import Chip from "@material-ui/core/Chip";
import './style.scss';

const required = value => (value == null ? 'Required' : undefined);

class AdvanceComponent extends Component {

  componentWillReceiveProps(props) {
    console.log(props.needByDate);
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
    const {entityId, entityList, viewList} = this.props;

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
        <Button variant="contained" color="primary" className='Advance__add'>
          <PlaylistAdd className='Advance__add--leftIcon'/>
          Add Item
        </Button>
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

  entityId: PropTypes.string.isRequired,
  viewId: PropTypes.number.isRequired,
  workflowId: PropTypes.number.isRequired,
  currencyId: PropTypes.number.isRequired,
  comments: PropTypes.string.isRequired,
};

export default AdvanceComponent;