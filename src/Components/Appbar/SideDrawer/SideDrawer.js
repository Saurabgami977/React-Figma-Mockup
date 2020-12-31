import { Box, Divider, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React from 'react';
import Buttons from '../../UI/Buttons/Buttons';
import Logo from '../../UI/Logo/Logo';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'start',
        justifyContent: 'space-between'
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    logo: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',
        width: '100px',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, classes.root, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })
            }
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <Typography variant="h6" className={classes.logo}>
                <Logo />
                        Saurav
            </Typography>
            <Divider />
            <List style={{ color: "primary" }}>
                {['Feature', 'Pricing', 'Community', 'Support'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon color="primary">{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText color="primary" primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                margin: '20px',
                width: 'auto'
            }}>
                <Buttons variant="outlined" color="primary">Login</Buttons>
                <Buttons variant="contained" color="primary">Register</Buttons>
            </div>
        </div >
    );

    return (
        <Box display={props.display}>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    );
}