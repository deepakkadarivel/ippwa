import React from 'react';
import PropTypes from 'prop-types';
import './price.scss';
import FormInput from "../../../common/form/FormInput";
import FormSelect from "../../../common/form/FormSelect";
import FormTextArea from "../../../common/form/FormTextArea";
import FormDate from "../../../common/form/FormDate";

const renderPrices = items => {
  return items.map(x => {
    switch (x.type) {
      case 'text':
        return <FormInput key={x.id} x={x} className='col-4 Form-Field__variant' handleChange={() => {}}/>;
      case 'select':
        return <FormSelect key={x.id} x={x} className='col-s-4 col-3 col-xs-3'/>;
      case 'textArea':
        return <FormTextArea key={x.id} x={x} className='col-s-4 col-3 col-xs-3'/>;
      case 'date':
        return <FormDate key={x.id} x={x} className='col-s-4 col-3 col-'/>;
      default:
        return null;
    }
  });
};

const Price = props => {
  return (
    <div className='Price'>
      {renderPrices(props.items)}
    </div>
  );
};

Price.propType = {
  items: PropTypes.array.isRequired,
};

export default Price;