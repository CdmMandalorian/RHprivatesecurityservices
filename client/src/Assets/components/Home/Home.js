import React from "react";
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Mission from "../Mission/Mission";
import Services from "../Cards/Cards";
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Home() {
    return (
        <>
        <HeroSection />
        <About />
        <Mission />
        <Services />
        <Contact />
        <Footer />
        </>
    );
}
export default Home;