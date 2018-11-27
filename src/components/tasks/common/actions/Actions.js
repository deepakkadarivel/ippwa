import React from 'react';
import Button from '@material-ui/core/Button';
import './actions.scss';
import history from '../../../../shared/service/history';

const Actions = props => {
  return (
    <div className='Actions'>
      <Button size="medium" className='Actions-btn' onClick={() => props.history.goBack()}>
        Cancel
      </Button>
      <Button variant="outlined" size="medium" color="secondary" className='Actions-btn'>
        Complete Approval
      </Button>
      <Button variant="outlined" size="medium" color="error" className='Actions-btn'>
        Reject
      </Button>
    </div>
  );
};

export default Actions;