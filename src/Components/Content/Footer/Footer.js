import { BottomNavigation, BottomNavigationAction, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import Logo from '../../UI/Logo/Logo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'f5f5f5',
        display: 'flex',
        flexDirection: 'column',

    },
});

export default function Footer() {

    const isSmall = useMediaQuery("(max-width: 500px)")
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    let changeDisplay = isSmall ? 'column' : 'row';
    return (
        <div style={{
            width: '98.8vw',
            padding: '40px',
            display: 'flex',
            height: '50vh',
            flexDirection: changeDisplay,
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Typography variant="h6" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100px',
                color: ' black',
                boxSizing: 'border-box',
                flexWrap: 'wrap'
            }}>
                <Logo />
                        Saurav
            </Typography>
            <div>
                <div>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        showLabels
                        className={classes.root}>
                        <BottomNavigationAction label="Features" color="#f5f5f5" />
                        <BottomNavigationAction label="Pricing" />
                        <BottomNavigationAction label="Community" />
                        <BottomNavigationAction label="Support" />
                    </BottomNavigation>
                </div>
            </div>
            <p style={{
                color: '#a6a6a6',

            }}>© Saurav. 2020. My Personal Portfoliio! <a target="__blank" href="https://www.linkedin.com/in/saurav-gami-08618b1a0/">Saurav Gami</a></p>
        </div>
    )
}
