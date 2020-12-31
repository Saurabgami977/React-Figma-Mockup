import { Grid } from '@material-ui/core';
import React from 'react';
import SubCarouselBox from './Box/SubCarouselBox';

export default function SubCarousel() {

    return (
        <div style={{
            marginTop: '30px',
            width: '100%'
        }}>

            <Grid container >
                <Grid item md={1} xs={null} sm={null}></Grid>
                <Grid container direction="column" item xs={12} sm={12} md={10}>
                    <Grid item xs={12} sm={8} md={6}>
                        <h1>Snap photos and share like never before</h1>
                    </Grid>
                    <Grid container item spacing={2} style={{ marginTop: '30px' }}>
                        <Grid item xs={12} sm={6} md={6} >
                            < SubCarouselBox
                                title="Hello world" >
                                typesetting industry.Lorem Ipsum has been the  industry's    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        </SubCarouselBox >
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} >
                            < SubCarouselBox
                                title="Hello world" >
                                typesetting industry.Lorem Ipsum has been the  industry's    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        </SubCarouselBox >
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} >
                            < SubCarouselBox
                                title="Hello world" >
                                typesetting industry.Lorem Ipsum has been the  industry's    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        </SubCarouselBox >
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} >
                            < SubCarouselBox
                                title="Hello world" >
                                typesetting industry.Lorem Ipsum has been the  industry's    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        </SubCarouselBox >
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={1} xs={null} sm={null}></Grid>
            </Grid>
        </div >
    )
}
