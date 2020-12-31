import { Box, Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
    root: {
        marginLeft: '20px'
    }
})

export default function Buttons(props) {
    const classes = useStyle();
    return (
        <div>
            <Box display={props.display}>
                <Button className={classes.root} size="small" variant={props.variant} color={props.color} >{props.children}</Button>
            </Box>
        </div>
    )
}
