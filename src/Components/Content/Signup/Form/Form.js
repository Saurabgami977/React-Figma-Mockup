import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, useMediaQuery } from '@material-ui/core';
import Buttons from '../../../UI/Buttons/Buttons';

export default function Form() {
    const isSmall = useMediaQuery("(max-width: 800px)");

    let boxWidth = isSmall ? '70vw' : '50vw';
    return (
        <div style={{
            border: '2px solid #a6a6a6',
            // height: '50vh',
            width: boxWidth,
            display: 'flex',
            flexDirection: 'column',
            padding: '3%',
            marginTop: '30px',
        }}>
            <h3 style={{
                marginBottom: '30px'
            }}><strong>Sign up for free account</strong></h3>
            <Grid container direction="row" item spacing={1} xs={12}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        style={{ width: '100%' }}
                        id="filled-textarea"
                        label="First name"
                        placeholder="First name"
                        multiline
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        style={{ width: '100%' }}
                        id="filled-textarea"
                        label="Last name"
                        placeholder="Last name"
                        multiline
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12} direction="column" spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '100%', marginTop: '10px' }}
                        id="filled-textarea"
                        label="Email address"
                        placeholder="Email address"
                        multiline
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        style={{ width: '100%', marginBottom: '10px' }}
                        id="filled-textarea"
                        label="Create password"
                        placeholder="Create password"
                        multiline
                        variant="outlined"
                    />
                </Grid>
                <Grid>
                    <Buttons variant="contained" color="primary">Register</Buttons>
                </Grid>
            </Grid>
        </div>
    )
}
