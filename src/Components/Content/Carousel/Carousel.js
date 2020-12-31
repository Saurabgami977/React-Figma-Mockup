import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import bg from '../../../Assets/bg.jpg';
import potraitbg from '../../../Assets/potraitbg.jpg';
import Center from './Center/Center';

export default function Carousel() {
    const isSmall = useMediaQuery("(max-width: 700px)");

    let imgSrc = isSmall ? potraitbg : bg;
    return (
        <div style={{
            overflow: 'hidden'
        }}>
            <img
                style={{
                    height: '100vh',
                    width: '100%',
                    opacity: '0.5',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
                src={imgSrc}
                alt="Our Beautiful Earth" />
            <Center />
        </div>
    )
}
