import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

const SnackBarMessage = (props) => {
    const { classes } = props;

    return (
        <div className={classes.wrapper}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={props.open}
                message={<span id="message-id">{props.message}</span>}
                onClose={() => props.setSnackBarMessage('')}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={() => props.setSnackBarMessage('')}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </div>
    );
};

export default withStyles(styles)(SnackBarMessage);
