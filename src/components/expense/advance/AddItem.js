import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './style.scss';
import Checkbox from '@material-ui/core/Checkbox';

const AddItem = (props) => {
  const {itemData, isItemsVisible, shouldShowItems, handleToggle, checked, billableChecked, handleBillToggle} = props;
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
              <ListItem key={row.ITEM_NO} role={undefined} dense button onClick={handleToggle(row.ITEM_NO)}>
                <Checkbox
                  checked={checked.indexOf(row.ITEM_NO) !== -1}
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
                    checked={billableChecked.indexOf(row.ITEM_NO) !== -1}
                    tabIndex={-1}
                    disableRipple
                    onChange={handleBillToggle(row.ITEM_NO)}
                  />}
                label="Billable"
              />
              <TextField
                id="amount"
                name='Amount'
                label="Amount"
                value=''
                className='Advance__Form--control'
                onChange={() => {
                }}
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
                onChange={() => {
                }}
                margin="normal"
                variant="outlined"
              />

            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </List>
    </Dialog>
  );
};

AddItem.propTypes = {
  itemData: PropTypes.array.isRequired,
  isItemsVisible: PropTypes.bool.isRequired,
  shouldShowItems: PropTypes.bool.isRequired,
};

export default AddItem;