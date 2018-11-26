import React from 'react';
import PropTypes from 'prop-types';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Card from "@material-ui/core/Card/Card";
import './line.scss';
import FormInput from "../../../common/form/FormInput";
import FormSelect from "../../../common/form/FormSelect";
import FormTextArea from "../../../common/form/FormTextArea";
import FormDate from "../../../common/form/FormDate";
import FormText from "../../../common/form/FormText";

const renderLines = props => {
  const {
    item,
    handleChange
  } = props;
  return item.lines.map(x => {
    switch (x.type) {
      case 'text':
        return x.readOnly ? <FormText key={x.id} x={x} className='col-s-2 col-2 col-xs-3 Form-Field__line' handleChange={handleChange}/> :
          <FormInput key={x.id} x={x} className='col-s-2 col-2 col- Form-Field__line' handleChange={prop => handleChange({field: prop, key: item.header.label})}/>;
      case 'select':
        return <FormSelect key={x.id} x={x} className='col-s-4 col-3 col-xs-3' handleChange={handleChange}/>;
      case 'textArea':
        return <FormTextArea key={x.id} x={x} className='col-s-4 col-3 col-xs-3' handleChange={handleChange}/>;
      case 'date':
        return <FormDate key={x.id} x={x} className='col-s-4 col-3 col-' handleChange={handleChange}/>;
      default:
        return null;
    }
  });
};

const Line = props => {
  return (
    <Card className='Line'>
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {props.item.header.label}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {props.item.header.value}
        </Typography>
        <Divider variant="inset"/>
        {renderLines(props)}
        {/*<Divider variant="inset"/>*/}
      </CardContent>
    </Card>
  );
};

Line.propType = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
};

export default Line;