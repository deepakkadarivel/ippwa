import React, {Component} from 'react';
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.scss';

class ExpenseComponent extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {anchorEl} = this.state;
    const {history} = this.props;
    return (
      <div>
        Expense
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
          <MenuItem onClick={() => history.push('/home/expense/claim')}>Claim</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ExpenseComponent;
