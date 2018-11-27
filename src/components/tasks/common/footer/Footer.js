import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';
import FormInput from "../../../common/form/FormInput";
import FormSelect from "../../../common/form/FormSelect";
import FormTextArea from "../../../common/form/FormTextArea";
import FormDate from "../../../common/form/FormDate";

const renderFooters = items => {
  return items.map(x => {
    switch (x.type) {
      case 'text':
        return <FormInput key={x.id} x={x} className='col-4 col-' handleChange={() => {}}/>;
      case 'select':
        return <FormSelect key={x.id} x={x} className='col-s-4 col-3 col-xs-3'/>;
      case 'textArea':
        return <FormTextArea key={x.id} x={x} className='col-4 col-'/>;
      case 'date':
        return <FormDate key={x.id} x={x} className='col-s-4 col-3 col-'/>;
      default:
        return null;
    }
  });
};

const Footer = props => {
  return (
    <div className='Footer'>
      {renderFooters(props.items)}
    </div>
  );
};

Footer.propType = {
  items: PropTypes.array.isRequired,
};

export default Footer;