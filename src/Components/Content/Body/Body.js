import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import body from '../../../Assets/body.jpg';
import Buttons from '../../UI/Buttons/Buttons';


export default function Body() {
    const isSmall = useMediaQuery("(max-width: 600px)");
    const isMedium = useMediaQuery("(min-width: 600px) and (max-width: 900px)");

    let fontSize = '30px';
    if (isSmall) {
        fontSize = '10px'
    } else if (isMedium) {
        fontSize = '20px'
    } else {
        fontSize = '30px'
    }

    return (
        <div style={{
            // height: '100vh',
            position: 'relative',
            marginTop: '30px',
        }}>
            <img style={{
                height: 'auto',
                width: '98.8vw',
                opacity: '0.6',
                // transform: 'scale(1.5)'
            }} src={body}
                alt="Beautiful Sub-Header" />
            <div style={{
                paddingLeft: '8%',
                position: 'absolute',
                top: '30%',
                width: '45%',
                textAlign: 'start'
            }}>
                <h1 style={{
                    fontSize: fontSize,
                    paddingBottom: (Number(fontSize.slice(0, 2) - 9) + 'px')
                }}>Learn about all the features of the Photo app</h1>
                <Buttons variant="contained" color="primary">Learn more</Buttons>
            </div>
        </div>
    )
}
