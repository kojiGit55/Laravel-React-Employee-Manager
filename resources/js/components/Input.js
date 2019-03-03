import React from 'react';

const Input = (props) => {
  return (
      <div>
          <label>
              {props.labelText}
              <input name={props.name} value={props.inputValue} onChange={props.handleChange} />
          </label>
      </div>
  );
};

export default Input;
