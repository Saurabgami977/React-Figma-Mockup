import { Box } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        width: 500,
        backgroundColor: 'f5f5f5'
    },
});

export default function Navigation(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Box display={props.display}>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Features" color="#f5f5f5" />
                <BottomNavigationAction label="Pricing" />
                <BottomNavigationAction label="Community" />
                <BottomNavigationAction label="Support" />
            </BottomNavigation>
        </Box>

    );
}