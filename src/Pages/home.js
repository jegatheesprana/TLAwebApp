import React from 'react'
import { Container } from '@mui/material'
import Navbar from '../Components/Home/Navbar/navbar'
import Landing from '../Components/Home/Landing/landing'
import Intro from '../Components/Home/Intro/intro'
import Event from '../Components/Home/Event/event'
import Gallery from '../Components/Home/Gallery/gallery'
import Contact from '../Components/Home/Contact/contact'
import Footer from '../Components/Home/Footer/footer'
function Home() {
    return (
        <>
            <Navbar />
            <Landing />
            <Intro />
            <Event />
            <Gallery />
            <Contact />
            <Footer />
        </>)
}
export default Home