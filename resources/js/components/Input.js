import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    textField: {
        width: '80%'
    },
};

const Input = (props) => {
    const { classes } = props;

    return (
      <div className={classes.wrapper}>
          <TextField
            variant="outlined"
            error={props.errorMessage === ''}
            className={classes.textField}
            label={props.labelText}
            name={props.name}
            value={props.inputValue}
            onChange={props.handleChange}
            helperText={props.errorMessage}
          />
      </div>
  );
};

export default withStyles(styles)(Input);
