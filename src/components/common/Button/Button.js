import React from 'react';
import Button from "@material-ui/core/Button";

const Btn = props => {
  const {onClick, label, color} = props;
  return (
    <Button variant="outlined" size="medium" className="Btn" onClick={onClick} color={color || 'default'}>
      {label}
    </Button>
  );
};

export default Btn;