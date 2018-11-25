import React from 'react';
import PropTypes from 'prop-types';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from "@material-ui/core/Divider/Divider";
import Card from "@material-ui/core/Card/Card";
import './header.scss';
import FormInput from "../../../common/form/FormInput";
import FormSelect from "../../../common/form/FormSelect";
import FormTextArea from "../../../common/form/FormTextArea";
import FormDate from "../../../common/form/FormDate";

const renderHeaders = props => {
  const {
    header,
    handleChange
  } = props;
  return header.map(x => {
    switch (x.type) {
      case 'text':
        return <FormInput key={x.id} x={x} className='col-s-4 col-3 col-' handleChange={handleChange}/>;
      case 'select':
        return <FormSelect key={x.id} x={x} className='col-s-4 col-3 col-' handleChange={handleChange}/>;
      case 'textArea':
        return <FormTextArea key={x.id} x={x} className='col-s-4 col-3 col-' handleChange={handleChange}/>;
      case 'date':
        return <FormDate key={x.id} x={x} className='col-s-4 col-3 col-' handleChange={handleChange}/>;
      default:
        return null;
    }
  });
};

const Header = props => {
  return (
    <Card className='Header'>
      <CardContent>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
        <Divider variant="inset"/>
        {renderHeaders(props)}
      </CardContent>
    </Card>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
  header: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
};

export default Header;