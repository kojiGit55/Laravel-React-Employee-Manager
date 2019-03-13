import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        width: '100%',
    },
    textField: {
        marginLeft: 5,
        marginRight: 5,
        width: '100%'
    },
};

const Input = (props) => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
          <TextField
            className={classes.textField}
            label={props.labelText}
            name={props.name}
            value={props.inputValue}
            onChange={props.handleChange}
          />
      </div>
  );
};

export default withStyles(styles)(Input);
