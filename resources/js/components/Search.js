import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '60%',
        margin: '10px 10px 10px 200px'
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    searchIcon: {
        padding: 10,
    },
};

function Search(props) {
    const { classes } = props;
    return (
        <Paper className={classes.root} elevation={1}>
            <SearchIcon className={classes.searchIcon}/>
            <InputBase className={classes.input} placeholder="Search Employee" value={props.searchText} onChange={props.handleChangeSearchText}></InputBase>
        </Paper>
    );
}

export default withStyles(styles)(Search);
