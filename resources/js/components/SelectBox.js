import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: 20,
    },
    inputLabel: {
        marginLeft: 50,
        display: 'block'
    },
    selectBox: {
        marginLeft: 50,
        width: '80%'
    },
};

const Input = (props) => {
    const { classes } = props;

    return (
        <div className={classes.wrapper}>
            <InputLabel className={classes.inputLabel} htmlFor={props.name}>{props.labelText}</InputLabel>
            <Select
                className={classes.selectBox}
                inputProps={{
                    name: props.name,
                    id: props.name,
                }}
                value={props.value}
                onChange={props.handleChange}
            >
                {
                    props.optionList.map(option => {
                        return <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>;
                    })
                }
            </Select>
            <FormHelperText>{props.errorMessage}</FormHelperText>
        </div>
    );
};

export default withStyles(styles)(Input);
