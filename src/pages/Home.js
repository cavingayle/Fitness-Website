import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'
import Infosection from '../components/Infosection'
import DoublePanel from '../components/DoublePanel'
import CallToAction from '../components/CallToAction'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import PopularCourses from '../components/PopularCourses'
import Footer from '../components/Footer'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <Hero />
        <Infosection />
        <DoublePanel />
        <CallToAction />
        <Services />
        <Testimonial />
        <PopularCourses />
        <Footer />
        </>
    )
}

export default Home
