import React from 'react'
import Body from './Body/Body'
import Carousel from './Carousel/Carousel'
import Footer from './Footer/Footer'
import Signup from './Signup/Signup'
import SubCarousel from './SubCarousel/SubCarousel'

export default function Content() {
    return (
        <div style={{ marginTop: '60px' }}>
            <Carousel />
            <SubCarousel />
            <Body />
            <Signup />
            <Footer />
        </div>
    )
}
