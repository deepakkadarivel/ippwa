import React from 'react';
import Button from "@material-ui/core/Button";
import './styles.scss';

const Btn = props => {
  const {onClick, label, color} = props;
  return (
    <Button variant="outlined" size="large" className="Btn" onClick={onClick} color={color || 'default'}>
      {label}
    </Button>
  );
};

export default Btn;