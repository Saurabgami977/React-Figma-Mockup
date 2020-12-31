import { useMediaQuery } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import React from 'react';
import Buttons from '../../../UI/Buttons/Buttons';






export default function Center() {


    let isSmall = useMediaQuery("(max-width:700px)");
    let isMedium = useMediaQuery("(min-width:700px) and (max-width: 1300px)");
    // let isLarge = useMediaQuery("(min-width: 1300px)");



    const style = {
        heigth: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '35vh',
        textAlign: 'center'
    }

    let fontSize = '56px'
    if (isSmall) {
        fontSize = '20px'
    } else if (isMedium) {
        fontSize = '30px'
    } else {
        fontSize = '56px'
    }

    let iconSize = 132;

    if (isSmall) {
        iconSize = 80
    } else if (isMedium) {
        iconSize = 100
    } else {
        iconSize = 132
    }

    return (
        <div style={style}>
            <PlayCircleFilledWhiteIcon
                color="primary"
                style={{ fontSize: iconSize }} />

            <h1 style={{
                fontSize: fontSize,
                fontWeight: '400',
                margin: '20px'
            }}>
                The largest Community of Photo Enthusiast
            </h1>

            <Buttons
                variant="contained"
                color='primary'
            >
                Join today
            </Buttons>
        </div >
    )
}
