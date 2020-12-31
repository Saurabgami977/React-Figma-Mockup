import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Buttons from '../UI/Buttons/Buttons';
import Logo from '../UI/Logo/Logo';
import Navigation from './Navigation/Navigation';
import SideDrawer from './SideDrawer/SideDrawer';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
        color: ' black',
        boxSizing: 'border-box'
    },

    logo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100px',
        color: ' black',
        boxSizing: 'border-box'
    },

    buttons: {
        display: 'flex',
    }
})

export default function Appbar() {
    const muiClasses = useStyles();
    return (
        <div >
            <AppBar position="fixed" color="default"  >
                <Toolbar className={muiClasses.root}>

                    {/* Logo */}
                    <Typography variant="h6" className={muiClasses.logo}>
                        <Logo />
                        Saurav
                    </Typography>

                    {/* Navigation bar in middle */}
                    <Navigation display={{ xs: 'none', sm: 'none', md: 'block' }} />

                    {/* Buttons */}
                    <div className={muiClasses.buttons} >
                        <Buttons display={{ xs: 'none', sm: 'none', md: 'block' }} variant="outlined" color="primary">Login</Buttons>
                        <Buttons display={{ xs: 'none', sm: 'none', md: 'block' }} variant="contained" color="primary">Register</Buttons>
                    </div>

                    {/* Hamburger Icon Sidedraweer */}
                    <SideDrawer display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} />
                </Toolbar>
            </AppBar>
        </div>
    )
}
