import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: 20,
        display: 'inline'
    },
    formControl: {
        width: '80%',
        margin: '0 auto'
    },
    selectBox: {
        width: '100%',
    },
};

const SelectBox = (props) => {
    const { classes } = props;

    return (
        <div className={classes.wrapper}>
            <FormControl className={classes.formControl}>

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
                    <MenuItem value="">None</MenuItem>
                    {
                        props.optionList.map(option => {
                            return <MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>;
                        })
                    }
                </Select>
                <FormHelperText>{props.errorMessage}</FormHelperText>

            </FormControl>

        </div>
    );
};

export default withStyles(styles)(SelectBox);
