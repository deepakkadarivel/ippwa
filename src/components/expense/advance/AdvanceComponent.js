import React, {Component} from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
// import DateFnsUtils from '@date-io/date-fns';
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';


import './style.scss';
import moment from "moment";

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
    const {viewId, workflowId, currencyId, needByDate, viewList, workflowList, currencies} = this.props;
    return (
      <div>
        <FormControl className='Advance__Form--control'>
          <InputLabel htmlFor="demo-controlled-open-select">View</InputLabel>
          <Select
            value={viewId}
            onChange={this.handleChange}
            inputProps={{
              name: 'viewId',
              id: 'viewId',
            }}
          >
            {viewList.map(view => <MenuItem key={view.viewId} value={view.viewId}>{view.viewName}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl className='Advance__Form--control'>
          <InputLabel htmlFor="demo-controlled-open-select">Workflow</InputLabel>
          <Select
            value={workflowId}
            onChange={this.handleChange}
            inputProps={{
              name: 'workflowId',
              id: 'workflowId',
            }}
          >
            {workflowList.map(workflow => <MenuItem key={workflow.workflowId}
                                                    value={workflow.workflowId}>{workflow.workflowName}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl className='Advance__Form--control'>
          <InputLabel htmlFor="demo-controlled-open-select">Currency</InputLabel>
          <Select
            value={currencyId}
            onChange={this.handleChange}
            inputProps={{
              name: 'currencyId',
              id: 'currencyId',
            }}
          >
            {currencies.map(currency => <MenuItem key={currency.currencyCode.currencyId}
                                                  value={currency.currencyCode.currencyId}>{`${currency.currencyCode.symbol} ${currency.currencyCode.code}`}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl className='Advance__Form--control'>
          {/*<InputLabel>Need By Date</InputLabel>*/}
          {/*<DatePicker*/}
            {/*margin="normal"*/}
            {/*// label="Date picker"*/}
            {/*value={needByDate}*/}
            {/*onChange={this.handleDateChange}*/}
          {/*/>*/}

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            label="Need By Date"
            // format={'DD-MM-YYYY'}
            autoOk={true}
            value={needByDate}
            onChange={this.handleDateChange}
            animateYearScrolling
          />
          </MuiPickersUtilsProvider>
        </FormControl>

      </div>
    )
  };

  render() {
    const {entityId, entityList, viewList} = this.props;

    const renderForm = () => {
      return (
        <div className='Advance__Form'>

          <div className='Advance__Form--header'>
            <Icon>attach_money</Icon> Advance
          </div>
          <FormControl className='Advance__Form--control'>
            <InputLabel htmlFor="demo-controlled-open-select">Entity</InputLabel>
            <Select
              value={entityId}
              onChange={this.handleChange}
              inputProps={{
                name: 'entityId',
                id: 'entityId',
              }}
            >
              {entityList.map(entity => <MenuItem key={entity.entityId}
                                                  value={entity.entityId}>{entity.entityName}</MenuItem>)}
            </Select>
          </FormControl>
          {viewList.length > 0 && this.renderForm()}
        </div>
      )
    };

    return (
      <div className='Advance'>
        {renderForm()}
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
};

export default AdvanceComponent;