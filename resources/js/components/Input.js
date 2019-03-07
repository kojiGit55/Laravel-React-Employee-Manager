import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  return (
      <div>
          <TextField
            label={props.labelText}
            name={props.name}
            value={props.inputValue}
            onChange={props.handleChange}
          />
      </div>
  );
};

export default Input;
