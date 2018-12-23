import React, {Component} from 'react';

class ClaimComponent extends Component {
  render() {
    const renderForm = () => {
      return (
        <div className='Claim__Form'>

        </div>
      )
    };

    return (
      <div className='Claim'>
        {renderForm()}
      </div>
    );
  }
}
export default ClaimComponent;