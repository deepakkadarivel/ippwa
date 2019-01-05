import React, {Component} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import './styles.scss';
import ExpenseDesktop from './desktop';

class ExpenseComponent extends Component {
  state = {
    anchorEl: null,
  };

  componentWillMount() {
    this.props.fetchExpenseGrid();
  }

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {anchorEl} = this.state;
    const {history, expenseGrid, expensePromise} = this.props;

    return (
      <div className='Expense container'>
        <ExpenseDesktop rows={expenseGrid.rows || []} promise={expensePromise}/>
        <Fab
          color="secondary"
          aria-label="Add"
          className='Expense__Add'
          aria-owns={anchorEl ? 'expense-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <AddIcon/>
        </Fab>

        <Menu
          id="expense-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => history.push('/home/expense/advance')}>Advance</MenuItem>
          <MenuItem onClick={() => history.push('/home/expense/advance')}>Claim</MenuItem>
        </Menu>
      </div>
    );
  }
}

ExpenseComponent.propTypes = {
  fetchExpenseGrid: PropTypes.func.isRequired,
  expenseGrid: PropTypes.object.isRequired,
  expensePromise: PropTypes.object.isRequired,
};

export default ExpenseComponent;
